import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const careers = [
  ["Software Developer","software-developer","TECHNOLOGY"],
  ["Data Analyst","data-analyst","TECHNOLOGY"],
  ["Cybersecurity","cybersecurity","TECHNOLOGY"],
  ["UI/UX Designer","ui-ux-designer","CREATIVE"],
  ["Cloud / DevOps","cloud-devops","TECHNOLOGY"],
  ["Business Analyst","business-analyst","BUSINESS"],
  ["Digital Marketing","digital-marketing","BUSINESS"],
  ["Sales / Business Development","sales-business-development","BUSINESS"],
  ["Human Resources","human-resources","BUSINESS"],
  ["Operations","operations","BUSINESS"],
  ["Accountant","accountant","FINANCE"],
  ["Financial Analyst","financial-analyst","FINANCE"],
  ["Banking","banking","FINANCE"],
  ["Government / UPSC","government-upsc","PROFESSIONAL"],
  ["Government / SSC","government-ssc","PROFESSIONAL"],
  ["Banking Exams","banking-exams","PROFESSIONAL"],
  ["Teaching","teaching","PROFESSIONAL"],
  ["Graphic / Visual Designer","graphic-designer","CREATIVE"],
  ["Video / Content Creator","video-content","CREATIVE"],
  ["Entrepreneurship / Small Business","entrepreneurship-small-business","ENTREPRENEURSHIP"]
] as const;

async function main() {
  for (const [name, slug, category] of careers) {
    await prisma.career.upsert({
      where: { slug },
      update: { name, category },
      create: {
        name,
        slug,
        category,
        shortDescription: "A career path worth exploring.",
        description: "Career information will be expanded from verified sources.",
        beginnerExplanation: "PATH will explain this career in simple language.",
        requiredEducation: "Varies by role and route.",
        source: "DEVELOPMENT_SEED",
      }
    });
  }
}

main().finally(() => prisma.$disconnect());
