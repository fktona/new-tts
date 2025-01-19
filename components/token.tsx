export default function TokenomicsContent() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 h-full lg:px-8 py-12 overflow-y-auto no-scrollbar">
      <div className="relative flex flex-col items-center justify-center p-4 max-h-[1000px]">
        <div className="w-full h-full relative max-h-[1000px] flex items-center blurs rounded-lg">
          <iframe
            src="https://my.spline.design/particlescopy-6ff2282b232aefa774235464dd70e2be/"
            frameBorder="0"
            width="100%"
            height="100%"
            className="absolute left-0 w-full h-full mix-blend-multiply"
          ></iframe>
          <div className="absolute bottom-0 w-full h-16 bg-[#121212]"></div>
        </div>
      </div>

      <div className="relative p-4 max-h-[1000px] flex flex-col items-center justify-center ">
        <div
          className="w-6
       absolute top-0 left-0 aspect-square border-t-2 border-l-2 border-white"
        />
        <div
          className="w-6
       aspect-square border-t-2 border-r-2 absolute top-0 right-0 border-white"
        />
        <div
          className="w-6
       aspect-square border-b-2 border-l-2 absolute bottom-0 left-0 border-white"
        />
        <div
          className="w-6
       aspect-square border-b-2 border-r-2 absolute bottom-0 right-0 border-white"
        />
        <div className="w-full h-full flex flex-col max-h-[1000px] items-start justify-center">
          <div className="blurs  p-4 font-byte w-full h-full flex flex-col items-center justify-center ">
            <div className="space-y-3">
              <h2 className="text-blue-400 font-byte mb-1 font-bold text-[36px]">
                Circulation (92%)
              </h2>
              <p className="text-white font-byte text-[24px]">
                92% of the token supply will be left for the open market to
                acquire. This will constitute the fairest market environment
                possible and allow the growth to rely on communal acquisition
                and sentiment.
              </p>
            </div>

            <div>
              <h2 className="text-blue-400 font-byte mb-1 font-bold text-[36px]">
                Development (4.5%)
              </h2>
              <p className="text-white font-byte text-[24px]">
                4.5% of the token supply will be locked in a reserve. These
                tokens will allow us to scale Truth Intelligence into the future
                and allow possibilities for future developments and
                opportunities. The lock will create a sense of ease in our
                market early on while the initial legs of the project are being
                built by the community.
              </p>
            </div>
            <div>
              <h2 className="text-blue-400 font-byte mb-1 font-bold text-[36px]">
                Team (2.5%)
              </h2>
              <p className="text-white font-byte text-[24px]">
                2.5% of the token supply will be reserved for the team. As a
                technical project, Truth Intelligence can only exist through the
                efforts of our team to continue to develop the product we have
                pushed to market. To ensure we can see a return on investment
                whilst also still keeping majority of the market share in the
                communities hands, we’ve allotted ourselves a humble 2.5% that
                should suffice for our efforts over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
