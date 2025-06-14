import { db } from "@/server/db";

export async function POST(req: Request) {
  const { data } = await req.json();

  const emailAddress = data.email_addresses[0].email_address;
  const firstName = data.first_name;
  const lastName = data.last_name;
  const imageUrl = data.image_url;
  const id = data.id;

  await db.user.create({
    data: {
      id,
      emailAddress,
      firstName,
      lastName,
      imageUrl
    }
  })

  console.log('user created')

  console.log('Clerk webhook received', data);
  return new Response('webhook received', { status: 200 });
}