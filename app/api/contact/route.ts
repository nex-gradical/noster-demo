import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    await resend.emails.send({
      from: "New enquiry <onboarding@resend.dev>",
      to: ["code.nex2496@gmail.com"],
      subject: "New contact form submission",
      html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.5;">
      <h2 style="margin-bottom:16px;">New enquiry </h2>
      <p><strong>First name :</strong> ${data.first_name}</p>
      <p><strong>Last name :</strong> ${data.last_name}</p>
      <p><strong>Email :</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.country_code} ${data.phone}</p>
      <p><strong>Company :</strong> ${data.company}</p>
      <p><strong>Team size :</strong> ${data.team_size}</p>
      <p><strong>Message :</strong> ${data.message}</p>
      </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
