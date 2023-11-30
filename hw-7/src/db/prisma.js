const { PrismaClient, Prisma } = require('@prisma/client');

class DB {
  constructor() {
    this.prisma = new PrismaClient();
    this.Prisma = Prisma;
  }
}

module.exports = new DB();
