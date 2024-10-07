import { Img } from "../../components/Img/Img";

interface Props {
className?: string;
}
export default function UserRating({ ...props }: Props) {
return (
<div {...props} className={ `${props.className} flex items-center gap-4 flex-1`}>
<Img src="images/img_checkmark.svg" alt="Checkmark" className="h-[24px] w-[24px]" />
<div className="flex flex-1 gap-2">
<Img src="images/img_star_1_2.svg" alt="Star Half" className="h-[24px] w-[24px]" />
<Img src="images/img_star_2_1.svg" alt="Star Full" className="h-[24px] w-[24px]" />
<Img src="images/img_star_3_24x24.svg" alt="Star Three" className="h-[24px] w-[24px]" />
<Img src="images/img_star_5.svg" alt="Star Five" className="h-[24px] w-[24px]" />
</div>
</div>
);
}