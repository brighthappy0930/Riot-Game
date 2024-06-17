import { happeningItem } from "../../../../utils/database";

function HappenItem() {
  return (
    <div className="2xl:max-w-[680px] mx-[20px] sm:mx-0">
      {
        happeningItem.map((item, index) =>
          <div className="sm:flex bg-[#808080] bg-opacity-20 rounded mb-[20px]" key={index}>
            <div className="flex flex-wrap w-full py-[16px] px-[26px] mr-[20px] content-between">
              <div className="w-full text-white text-[17px] break-words">
                {item.description}
              </div>
              <div className="flex items-center">
                <img src={item.icon} />
                <div className="text-[#656462] text-[17px] ml-[8px]">
                  {item.status}
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img src={item.image} />
            </div>
          </div>
        )
      }
    </div>
  );
}

export default HappenItem;
