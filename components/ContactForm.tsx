export default function ContactForm() {
  return (
    <section className="bg-[#f5d6ab] font-pop p-5 xl:p-10 rounded-lg">
      <h2 className="text-2xl font-semibold mb-5">Get in touch</h2>
      <p className="pb-10 text-sm">
        If you'd like to arrange a tour or find out more, drop us a line.
      </p>

      <form
        className="flex flex-col gap-5"
        onSubmit={async (e) => {
          e.preventDefault();

          const form = e.currentTarget; 

          const formData = new FormData(form);
          const data = Object.fromEntries(formData);

          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });

          if (res.ok) {
            alert("Form submitted successfully!");
            form.reset();
          } else {
            alert("Something went wrong. Please try again.");
          }
        }}
      >
        <h3 className="font-medium">Your Details</h3>
        {/* First Name */}

        <input
          className="border rounded py-3 px-1"
          type="text"
          name="first_name"
          placeholder="First name"
          required
        />

        {/* Last Name */}
        <input
          className="border rounded py-3 px-1"
          type="text"
          name="last_name"
          placeholder="Last name"
        />
        {/* Email */}
        <input
          className="border rounded py-3 px-1 bg-[#f5d6ab]"
          type="email"
          name="email"
          placeholder="Contact email"
          required
        />
        {/* Contact Number */}
        <div className="flex flex-col  xl:flex-row gap-2">
          <select
            className="border bg-[#f5d6ab] rounded px-1 py-1 xl:py-0"
            name="country_code"
            defaultValue="+91"
          >
            <option value="+91">🇮🇳 +91 (India)</option>
            <option value="+1">🇺🇸 +1 (USA)</option>
            <option value="+44">🇬🇧 +44 (UK)</option>
            <option value="+971">🇦🇪 +971 (UAE)</option>
            <option value="+65">🇸🇬 +65 (Singapore)</option>
            <option value="+81">🇯🇵 +81 (Japan)</option>
          </select>
          <input
            className="border rounded py-3 px-1"
            type="tel"
            name="phone"
            placeholder="Contact number"
            inputMode="numeric"
            maxLength={10}
            pattern="[0-9]+"
            required
          />
        </div>
        {/* Company */}
        <input
          className="border rounded py-3 px-1"
          name="company"
          placeholder="Company"
        />
        {/* Party Size */}
        <div className="flex flex-col gap-4">
          <h2 className="font-medium">
            How many people will work in your new office?
          </h2>
          <div className="flex gap-5">
            <label>
              <input type="radio" name="team_size" value="1-9" />
              1-9
            </label>

            <label>
              <input type="radio" name="team_size" value="10-19" />
              10-19
            </label>

            <label>
              <input type="radio" name="team_size" value="20-39" />
              20-39
            </label>
          </div>
        </div>
        {/* Additional Information */}
        <h2 className="font-medium">Additional information</h2>

        <textarea
          name="message"
          className="resize-none border rounded pb-20 pl-2 pt-2"
          placeholder="Please mention any additional information here..."
        />
        <div>
          <button
            className="cursor-pointer bg-black py-4 px-9 rounded text-[#fbefdd] hover:bg-[#274038] transition-colors duration-500"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
