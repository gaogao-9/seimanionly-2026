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
            <a
              className="block mx-auto my-[20px] max-w-[80%]"
              href="/assets/img/event/shikishi_info.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full"
                src="/assets/img/event/shikishi_info.jpg"
                alt="色紙募集要項"
              />
            </a>
            <a
              className="block mx-auto my-[20px] max-w-[80%]"
              href="/assets/img/event/shikishi_invoice.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full"
                src="/assets/img/event/shikishi_invoice.jpg"
                alt="色紙伝票"
              />
            </a>
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
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>アフターイベント</CardTitle>
        </CardHeader>
        <CardHeader>
          <CardSubTitle>アキナイカク</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            政霊を一人思い浮かべて、質問に答え、政霊を当てる……のはあなた！？
            <br />
            ナイカクが思い浮かべた政霊を、質問して推理しましょう。
            <br />
            思い浮かべている政霊を絞り出し、当てろ！&nbsp;ピタリ賞！
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>たわしの挑戦状</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            史上初の総理個人協賛企画。イベント会場でレッツ戦挙！
            <br />
            志願者総理たちに&quot;ちなんだ&quot;お題を発表したら、タイマースタート。
            <br />
            制限時間内に難題を突破し、クリア景品ゲットを目指せ！
          </CardDescription>
        </CardContent>
      </Card>
    </CardWrapper>
  );
};

export default Page;
