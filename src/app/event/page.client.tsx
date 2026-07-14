"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardSubTitle,
  CardTitle,
  CardWrapper,
} from "@/components/custom/Card";

const Page: React.FC = () => {
  return (
    <CardWrapper>
      <Card>
        <CardHeader>
          <CardTitle>イベント情報</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            「漕ぎ出せ！ソクバイ海Ⅸ」の会場企画はこちら！
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>色紙大募集</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            今回も全国の皆さんから色紙を募集します！
            <br />
            会場を政霊たちのイラストで華やかに飾りましょう！
            <br />
            募集条件や宛先は後日お知らせします。
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>ホワイトボード</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            こちらも毎回恒例のホワイトボード！
            <br />
            来場の記念に総理の皆さんからヒトコト～クダサイ～オネガイ～
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>アフターイベント</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            即売会パートの後に開催予定！
            <br />
            企画詳細は後日お知らせします。
          </CardDescription>
        </CardContent>
      </Card>
    </CardWrapper>
  );
};

export default Page;
