"use client";

import Link from "next/link";
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
          <CardTitle>参加する全ての総理の皆さんへ</CardTitle>
          <CardSubTitle>はじめに</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            一般参加を予定される総理の皆さんは、下記の諸注意をお読みいただいた上でご参加ください。
            <br />
            なお、ご不明な点がございましたら、お気軽に主催メールアドレス宛にお問い合わせください。
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>イベント名</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            政剣マニフェスティアオンリー同人誌即売会
            <br />
            緊急交流イベント「漕ぎ出せ！ソクバイ海Ⅸ」
            <br />
            #アイムソウリー2026
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>日程・会場</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            2026年9月21日（月・祝）
            <br />
            ハイライフプラザいたばし
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>イベントスケジュール</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            10:30
            <br />
            &nbsp;【サークル】参加総理入場開始
            <br />
            &nbsp;【更衣室】開場
            <br />
            12:30
            <br />
            &nbsp;【一般】参加総理入場開始
            <br />
            &nbsp;【即売会】開始
            <br />
            14:30
            <br />
            &nbsp;【即売会】終了
            <br />
            15:30
            <br />
            &nbsp;【アフターイベント】開始
            <br />
            16:30
            <br />
            &nbsp;【アフターイベント】終了
            <br />
            18:00
            <br />
            &nbsp;【更衣室】閉鎖
            <br />
            20:00
            <br />
            &nbsp;【会場】完全撤収
            <br />
            <br />
            ※スケジュールは変更になることがあります
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>参加費</CardTitle>
          <CardSubTitle>サークル参加の総理の皆さん</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            「サークル参加」ページをご確認ください。
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>一般の総理の皆さん</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <strong>当日、会場受付にて現金でお支払いください。</strong>
            <br />
            ・【一般参加】1500円
            <br />
            <br />
            受付時、カタログや入場記念品などをお渡しいたします。
            <br />
            <strong>※今回は電子チケットの販売を行いません</strong>
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>コスプレ参加の総理の皆さん</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            一般参加費に加えて、コスプレ登録・更衣室使用料を更衣室入室の際に頂戴いたします。
            <br />
            詳細は「コスプレ参加」ページをご確認ください。
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>会場でのお願い</CardTitle>
          <CardSubTitle>迷惑行為、危険行為の禁止</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            ・会場内外で走る、受付より外の会場外共用部に長時間立ち止まる、などの行為はご遠慮ください。
            <br />
            ・一箇所のサークルスペース前に長時間居座る、近隣のサークルスペースの前にはみ出す、などの行為は、他の参加者の迷惑になりますのでご遠慮ください。
            <br />
            ・会場は禁煙、禁酒です。喫煙は指定の喫煙スペースにてお願いします。
            <br />
            ・会場内や会場周辺での勧誘行為、パフォーマンスなどの混乱が予想される行為は禁止です。
            <br />
            ・モデルガン・エアガンなどの武器類、楽器などの大きな音の鳴る物、引火物、アルコール（消毒用途を除く）、ペット、その他危険と思われるものの持ち込みは禁止です。
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>会場内撮影について</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            ・会場内での動画撮影は一切禁止です。
            <br />
            ・会場内での写真撮影はサークルスペースや展示物、コスプレの撮影に限り可能です。ただし、人物が写り込まないようにご配慮ください。もし写り込んでしまったものをSNS等にアップロードする場合は【必ず加工を施し】個人の特定ができないようにしてください。
            <br />
            ・サークルスペースやコスプレイヤーを撮影する際、また撮影したものをSNSにアップロードする際には、被写体のサークル参加者やコスプレ参加者に許可を得てください。
            <br />
            ・コスプレ撮影を行う場合、サークルスペースが写り込まないようにご配慮ください。
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>会場利用規約厳守のお願い</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            ・共用部のコンセントの使用は禁止です。
            <br />
            ・荷物は受付より外の共用部には絶対に置かないでください。
            <br />
            ・ゴミは所定の場所に捨ててください。所定の場所以外の箇所でのポイ捨ては厳禁です。
            <br />
            ・会場内非常口の前に荷物を置かないようにお願いいたします。
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>喫煙に関するお願い</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            ・喫煙スペースは今回【廃止】となりました。ご了承ください。
            <br />
            ・会場近隣の喫煙所をご利用ください。
            <br />
            ・なお、喫煙所以外での喫煙は厳禁です。
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>落とし物について</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            ・落とし物・忘れ物などは【会場本部】までお届けください。
            <br />
            ・金銭・貴重品の紛失につきましては当イベント主催者では責任を負いかねますので、貴重品の管理にご注意ください。
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>その他</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            ・緊急の場合を除き、個人的な呼び出しはできません。
            <br />
            ・ケガをした方、気分の悪くなった方はお近くの戦挙管理委員までお申し出ください。
            <br />
            ・飲食物の持ち込みは可能ですが、会場を汚されないよう十分ご注意ください。
            <br />
            ・イベント会場内での手作り食品の差し入れはご遠慮ください。
            <br />
            ・コスプレまたはコスプレと判断されるような服装での入場・退場は禁止です。コスプレをされる場合、所定の更衣室での着替えをお願い致します。
            <br />
            ・会場外における事故・トラブルにつきまして当イベント主催者は保障できません。ご来場、ご帰宅の際はご注意ください。
            <br />
            ・会場内におけるマスクの着用は任意とします。
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>コスプレに関する諸注意</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            コスプレ参加者向けのページに掲載しております。コスプレ参加予定の方はご一読ください。
            <br />
            <Link href="/cosplay">https://festia.moe/cosplay</Link>
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>一般参加者による会場内頒布行為の禁止</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            会場内では、一般参加者による同人誌、同人グッズ、あるいはそれに準ずるものの頒布行為は全面的に禁止です。
            <br />
            一般参加者からサークル参加者への差し入れ等は良識の範囲内でお願い致します。
            <br />
            目に余る行為が見受けられた場合はご退場をお願いする場合もあります。
            <br />
            即売会を皆様に楽しんでいただくため、ご協力をお願い致します。
            <br />
            会場内で頒布行為をしたい方は是非ともサークル参加を！
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>プライバシーポリシー</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            戦挙管理委員会（以下「当会」といいます）は、個人情報の保護に関する法令等を遵守するとともに、本プライバシーポリシーを遵守します。
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>1. 個人情報の定義</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            個人情報とは、氏名、住所、生年月日、年齢、性別、電話番号、電子メールアドレス、IPアドレス、銀行口座番号のうち、1つあるいは2つ以上を組み合せることによって、特定の個人を識別できるものを指します。
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>2. 個人情報の取得</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            当会は、個人情報を、適正な手段により取得いたします。
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>3. 個人情報の利用目的</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            当会は、主催する即売会・イベント等において、個人情報を、以下の目的で利用し、ご本人の同意を頂いた範囲内においてのみ取り扱います。
            <br />
            (1) 即売会・イベント等の運営に必要な情報を処理するため
            <br />
            (2) 即売会・イベント等に関する重要事項を参加者に連絡するため
            <br />
            (3) 即売会・イベント等の運営上のトラブルを解決するため
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>4. 個人情報の第三者への提供</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            当会は、個人情報保護法その他の法令により認められる事由がある場合を除き、ご本人の同意なくして、第三者に提供・開示しません。
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>5. 個人情報の安全管理</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            当会は、個人情報を適切に管理し、個人情報の漏えい、滅失、毀損等に対する予防措置を講じます。
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>6. 個人情報の開示、訂正、苦情等</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            当会は、個人情報について、開示、訂正、苦情等について、ご本人からのお申出があった場合には、お申出頂いた方がご本人であることを確認の上、個人情報保護法の定めに従い、速やかに対応いたします。
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>7. プライバシーポリシーの変更</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            当会は、必要に応じて、本プライバシーポリシーの内容を改定することがあります。その場合、変更箇所を速やかに公表するものとします。
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>8. お問い合わせ窓口</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            戦挙管理委員会 seimani.only[at]gmail.com
          </CardDescription>
        </CardContent>
      </Card>
    </CardWrapper>
  );
};

export default Page;
