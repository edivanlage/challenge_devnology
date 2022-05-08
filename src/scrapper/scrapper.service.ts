import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ScrapperService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const URL = `https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops`;
    const browser = await puppeteer.launch({
      args: [
        // Required for Docker version of Puppeteer
        '--no-sandbox',
        '--disable-setuid-sandbox',
        // This will write shared memory files into /tmp instead of /dev/shm,
        // because Docker’s default for /dev/shm is 64MB
        '--disable-dev-shm-usage',
      ],
    });
    const page = await browser.newPage();
    await page.goto(URL, { waitUntil: 'networkidle2' });
    const results = await page.evaluate(() => {
      const allComputers = [];
      document.querySelectorAll('.thumbnail').forEach(item => {
        const data = {
          title: item.querySelector(' .title')?.textContent,
          price: item.querySelector('.price')?.textContent,
          description: item.querySelector('.description')?.textContent,
          rate: item.querySelector('.ratings')?.getElementsByTagName('span')
            .length,
          reviews: item.querySelector('.ratings > p')?.textContent,
        };
        allComputers.push(data);
      });
      return { computers: allComputers };
    });

    await browser.close();

    const database = await this.prisma.computers.findMany();

    if (database.length == 0) {
      results.computers.forEach(async computer => {
        await this.prisma.computers.create({
          data: {
            brand: computer.title.split(' ').shift().toLowerCase(),
            title: computer.title,
            price: parseFloat(computer.price.substring(1)),
            description: computer.description,
            rate: computer.rate,
            reviews: parseInt(computer.reviews.split(' ').shift()),
          },
        });
      });
    }
    return { computers: await this.prisma.computers.findMany() };
  }

  async findByBrand(brand: string) {
    const results = await this.prisma.computers.findMany({
      orderBy: {
        price: 'asc',
      },
      where: {
        brand: brand.toLowerCase(),
      },
    });
    return { computers: results };
  }
}
