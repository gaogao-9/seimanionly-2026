"use client";

import { CalendarClock, MapPin, TramFront } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardWrapper,
} from "@/components/custom/Card";

const Page: React.FC = () => {
  return (
    <CardWrapper>
      <Card>
        <CardHeader>
          <CardTitle>会場情報</CardTitle>
        </CardHeader>
        <CardContent noSpacing>
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.143738208653!2d139.7181995152606!3d35.74727168017894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018929b169ebdf9%3A0x1de184c377047485!2z44OP44Kk44Op44Kk44OV44OX44Op44K244GE44Gf44Gw44GX!5e0!3m2!1sja!2sjp!4v1687789303455!5m2!1sja!2sjp"
              allowFullScreen
              className="w-[100%] h-[620px] p-[10px] border-none"
            />
            <div className="w-fit p-4">
              <ul className="text-lg *:flex *:align-center *:my-3">
                <li className="*:self-center">
                  <MapPin color="var(--color-emerald-600)" />
                  <CardDescription className="whitespace-nowrap leading-none ml-[4px]">
                    会場:&nbsp;ハイライフプラザいたばし
                  </CardDescription>
                </li>
                <li className="*:self-center">
                  <CalendarClock color="var(--color-emerald-600)" />
                  <CardDescription className="whitespace-nowrap leading-none ml-[4px]">
                    日程:&nbsp;2026年9月21日 (月・祝)
                  </CardDescription>
                </li>
              </ul>
              <ul className="mt-6 text-lg *:flex *:my-3">
                <li className="*:self-center">
                  <TramFront
                    className="inline-block"
                    color="var(--color-emerald-600)"
                  />
                  <CardDescription className="whitespace-nowrap leading-none ml-[4px]">
                    JR埼京線&nbsp;板橋駅&nbsp;徒歩1分
                  </CardDescription>
                </li>
                <li className="*:self-center">
                  <TramFront
                    className="inline-block"
                    color="var(--color-sky-600)"
                  />
                  <CardDescription className="whitespace-nowrap leading-none ml-[4px]">
                    都営三田線&nbsp;新板橋駅&nbsp;徒歩3分
                  </CardDescription>
                </li>
                <li className="*:self-center">
                  <TramFront
                    className="inline-block"
                    color="var(--color-blue-800)"
                  />
                  <CardDescription className="whitespace-nowrap leading-none ml-[4px]">
                    東武東上線&nbsp;下板橋駅&nbsp;徒歩7分
                  </CardDescription>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </CardWrapper>
  );
};

export default Page;
