import HappenItem from "./item";

function Happening() {
  return (
    <>
      <div className="py-[100px] px-[15px] w-full">
        <div className="md:px-[80px]">
          <div className="flex justify-between">
            <div className="text-white text-[48px]">
              What's Happening?
            </div>
            <div className="flex items-center">
              <div className="sm:block hidden bg-[#808080] bg-opacity-20 rounded px-[12px] py-[8px] text-white">
                see more
              </div>
            </div>
          </div>
          <div className="2xl:flex mt-[40px]">
            <div className="2xl:pr-[24px]">
              <img src="/assets/img/develop.png"/>
              <div className="text-white text-[31px]">Hall of Legends : Faker</div>
              <div className="flex items-center">
                <img src="/assets/icon/happen1.png"/>
                <div className="text-[#656462] text-[17px] ml-[8px]">
                  NEWS
                </div>
              </div>
            </div>
            <div>
              <HappenItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Happening;
