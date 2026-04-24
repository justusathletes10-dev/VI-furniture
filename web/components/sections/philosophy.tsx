export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="bg-[#F5F2EC] py-32 md:py-44 px-6 md:px-10"
    >
      <div className="mx-auto max-w-5xl text-center">
        <p
          className="font-serif text-[#1A1A1A] leading-[1.18]"
          style={{
            fontSize: "clamp(2rem, 4.6vw, 4.25rem)",
            fontWeight: 400,
          }}
        >
          We believe a room is defined not by how much it holds, but by{" "}
          <span className="italic text-[#7C4A2C]">what remains</span> when the
          noise is stripped away.
        </p>

        <div className="mt-16 md:mt-20 max-w-2xl mx-auto space-y-6 text-[#6B6660] text-[15px] leading-[2] font-light">
          <p>
            Headquartered in a converted warehouse on the seafront in Batroun,
            VI is a design-led furniture house dedicated to the marriage of
            warm walnut, brushed brass, and raw, hand-finished surfaces.
          </p>
          <p>
            Every piece is an exploration of form, weight, and touch — designed
            for architects, art directors, and those who appreciate the poetry
            of a well-crafted joint.
          </p>
        </div>
      </div>
    </section>
  );
}
