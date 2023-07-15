"use client";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";
import {Carousel} from "antd";

export default function StyledCarousel({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<Carousel
			autoplay
			autoplaySpeed={5000}
			arrows={true}
			prevArrow={
				<span>
					<LeftOutlined className="text-2xl" />
				</span>
			}
			nextArrow={
				<span>
					<RightOutlined className="text-2xl" />
				</span>
			}
			draggable={true}
			className="flex justify-center items-center mx-4 text-white py-8 [&>*]:text-center"
		>
			{children}
		</Carousel>
	);
}
