import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { userP6000 } from "../data/users/userLooks";
import CardLooks from "./CardLooks";

export default function CarruselPersonas() {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={5}
      slidesPerView={3}
      navigation
      className="max-w-[1200px] mx-auto"
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {userP6000.map((item) => (
        <SwiperSlide>
          <CardLooks img={item.imgUrl} user={item.user} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
