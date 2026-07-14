"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardSubTitle,
  CardTitle,
  CardWrapper,
} from "@/components/custom/Card";
import { staffs, keyVisualStaffs } from "@/foundation/staffs";

const Page: React.FC = () => {
  return (
    <CardWrapper>
      <Card>
        <CardHeader>
          <CardTitle>スタッフ一覧</CardTitle>
          <CardSubTitle>運営スタッフ</CardSubTitle>
        </CardHeader>
        <CardContent noSpacing>
          <div className="flex flex-wrap justify-center gap-5">
            {staffs.map((staff) =>
              !staff.disabled ? (
                <a
                  href={`https://twitter.com/${staff.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Avatar size="lg">
                    <AvatarImage
                      src={`/assets/img/staff/${staff.name}.${staff.ext}`}
                    />
                    <AvatarFallback>{staff.nickname}</AvatarFallback>
                  </Avatar>
                </a>
              ) : (
                <Avatar size="lg">
                  <AvatarImage
                    src={`/assets/img/staff/${staff.name}.${staff.ext}`}
                  />
                  <AvatarFallback>{staff.nickname}</AvatarFallback>
                </Avatar>
              ),
            )}
          </div>
        </CardContent>
        <CardHeader>
          <CardSubTitle>キービジュアル</CardSubTitle>
        </CardHeader>
        <CardContent noSpacing>
          <div className="flex flex-wrap justify-center gap-5">
            {keyVisualStaffs.map((staff) =>
              !staff.disabled ? (
                <a
                  href={`https://twitter.com/${staff.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Avatar size="lg">
                    <AvatarImage
                      src={`/assets/img/staff/${staff.name}.${staff.ext}`}
                    />
                    <AvatarFallback>{staff.nickname}</AvatarFallback>
                  </Avatar>
                </a>
              ) : (
                <Avatar size="lg">
                  <AvatarImage
                    src={`/assets/img/staff/${staff.name}.${staff.ext}`}
                  />
                  <AvatarFallback>{staff.nickname}</AvatarFallback>
                </Avatar>
              ),
            )}
          </div>
        </CardContent>
      </Card>
    </CardWrapper>
  );
};

export default Page;
