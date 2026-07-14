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
          <CardTitle>『漕ぎ出せ！ソクバイ海Ⅸ』個人協賛募集！</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            いつも『漕ぎ出せ！ソクバイ海』へのご参加・ご支援ありがとうございます！
            <br />
            <br />
            このたび、2026年9月21日（月・祝）開催予定の政剣マニフェスティア非公式オンリーイベント『漕ぎ出せ！ソクバイ海Ⅸ
            #アイムソウリー2026』にあたり、個人協賛を募集する運びとなりました。
            <br />
            <br />
            「ソクバイ海の個人協賛……？」と思われた総理の皆さん！
            <br />
            よろしければ最後までご一読いただき、面白そうと思っていただけた方は、ページ末尾のフォームからご連絡ください。
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>
            【重要】協賛いただかなくてもイベント参加は可能です！
          </CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            もちろん、この個人協賛企画に参加いただかなくても、イベント自体への参加は可能です！
            <br />
            <strong>
              当日会場にお越しいただいて、実際にイベントに参加いただくことが、イベントへの大きな応援になります。
            </strong>
            <br />
            ぜひ9月21日は、東京・板橋区の「ハイライフプラザいたばし」にお越しください。
            <br />
            <br />
            「漕ぎ出せ！ソクバイ海」は、全国の『総理』の皆さんが一同に会する、年に一度のイベントです。
            <br />
            <strong>今年の一般参加は、事前申込が一切不要です。</strong>
            <br />
            イベント詳細はウェブサイト（{" "}
            <a
              href="https://festia.moe"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://festia.moe
            </a>{" "}
            ）をご確認ください。
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>協賛募集の背景</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            近年の物価高・人件費高の煽りもあり、会場費をはじめとするイベント運営コストは年々高額化しております。
            <br />
            <br />
            一方で、同人誌即売会として、サークル参加のハードルは上げたくありません。一般参加のハードルも同様です。
            <br />
            <br />
            「漕ぎ出せ！ソクバイ海」を主催する戦挙管理委員会は、なるべく多くの総理の皆さんにイベントに参加していただいた上で楽しんで満足いただけるよう、毎回努力を重ねてまいりました。
            <br />
            <br />
            今回、感染症対策で導入した入場券システムの利用を見送るなど、できる限りの経費削減に取り組んでおります。
            <br />
            <br />
            しかしながら、それでもなおイベント運営費用の確保が厳しい状況が続いております。
            <br />
            <br />
            そこで、今後も全国の総理の皆さんに楽しんでいただけるイベントを継続していくために、今回は初めての試みとして、有志総理の皆さんからの「個人協賛」をお願いすることにいたしました。
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>協賛プランのご案内</CardTitle>
          <CardSubTitle>✉️ 全プラン共通の条件</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            ・
            <strong>
              協賛申し込み時点からイベント開催後1ヶ月までの間、メールでのご連絡が確実に可能な総理
            </strong>
            <br />・
            <strong>
              今回は事務対応の都合上、1人1口限定（複数プランの協賛不可）といたします。
            </strong>
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>🎁 全プラン共通の特典</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            すべてのプランで共通する特典です。
            <br />
            <br />
            ・イベントへの<strong>一般参加1名ご招待</strong>
            <br />
            &nbsp;
            <strong>
              ※サークル参加をご希望の場合は、別途通常のサークル参加申込・お支払いが必要です
            </strong>
            <br />
            ・イベント公式カタログへのお名前（ハンドルネーム）掲載
            <br />
            ・当日アフターイベントでのお名前アナウンス
            <br />
            ・イベント後の収支報告
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>
            🌸 梅プラン｜通常景品協賛コース｜5,000円〜10,000円（人数制限なし）
          </CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            景品選定は主催にお任せする形で協賛いただけるプランです。
            <br />
            協賛額は5,000円で十分ですが、5,000円以上10,000円以下の範囲でお受けいたします。
            <br />
            <br />
            ・いただいた協賛金は、例年ご用意しておりますアフターイベントの景品に活用いたします。剰余があった場合は、イベント運用関連費に充当いたします。
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>
            🎋 竹プラン｜プレミアム景品協賛コース｜10,000円（限定2名）
          </CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            イベントをより深く応援してくださる方向けの中級プランです。
            <br />
            参加総理を特別な景品で驚かせたい総理にオススメ！
            <br />
            <br />・<strong>プレミアム景品内容の事前ご相談権</strong>
            <br />
            &nbsp;・あなたのアイデアを反映した景品を（時間と予算が許す範囲で）戦挙管理委員会が調達いたします！
            <br />
            ・当日アフターイベントにて「本日の目玉景品」としてアナウンスいたします。
            <br />
            ・希望者多数の場合、フォームに記載いただいた予定景品の方向性を踏まえて、戦挙管理委員会が選出させていただきます。
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>
            🎍 松プラン｜特別企画協賛コース｜20,000円（限定1名）
          </CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            イベントに一層深く関わっていただける、上級プランです。
            <br />
            全国の総理が集まるイベントで「こんなことをやってみたい」という思いがある総理にオススメ！
            <br />
            <br />・<strong>イベント内企画の立案・参画権</strong>
            <br />
            &nbsp;・主催「戦挙管理委員会」のチームとオンラインで打ち合わせを行い、アフターイベントや展示企画などの、イベント内企画として、あなたのアイデアを一緒に形にしていきます！
            <br />
            ・企画に参画いただく特性上、松プランの協賛には以下の条件があります。
            <br />
            &nbsp;・イベント開催までの期間、<strong>音信不通にならない</strong>
            こと
            <br />
            &nbsp;・discord、またはそれに類する主催指定チャットツールをご利用いただくこと
            <br />
            ・希望者多数の場合、フォームに記載いただいた予定企画の方向性を踏まえて、戦挙管理委員会が選出させていただきます。
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>お申し込みについて</CardTitle>
          <CardSubTitle>梅プランをご希望の方</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            1. 下記フォームよりお申し込みください
            <br />
            2. 順次、主催からメールにて手続きをご案内いたします
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>竹・松プランをご希望の方</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            1.
            下記フォームより、実現したい企画の方向性などをご記入のうえお申し込みください
            <br />
            2.
            主催内で企画選考を行います（応募締切：7月24日(金)、選定：8月頭頃を予定）
            <br />
            3.
            選定された方には個別にご連絡し、チャットまたはメールで内容をご相談・確定いたします
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>募集期間</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            ・松プラン・竹プラン：<strong>2026年7月24日（金）</strong>
            <br />
            ・梅プラン：<strong>2026年8月20日（木）</strong>
            <br />
            <br />
            ※松プラン・竹プランは選考制のため、内容によってはご希望に添えない場合がございます。あらかじめご了承ください。松プラン・竹プランの選考から外れた場合、梅プランでの協賛に切り替えていただくことも可能です。
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>ご注意事項</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            ・企画・景品の内容について、公序良俗に反する内容や、特定の個人・サークル様を誹謗するような内容、会場規約に反する内容（火気の使用、生ものの提供等）はお受けできませんので、あらかじめご了承ください。
            <br />
            ・万が一、天災等やむを得ない事情によりイベントが中止となった場合の対応につきましては、中止が決定した時点でご案内いたします。
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>収支のご報告について</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            いただいた協賛金は、当日の景品・企画運営費として大切に活用させていただきます。
            <br />
            イベント終了後1ヶ月を目処に、ご協賛いただいた皆さまへ収支のご報告をいたします。
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

      <Card>
        <CardHeader>
          <CardTitle>お申し込みはこちら</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            温かいご支援を賜れましたら幸いです。何卒よろしくお願いいたします。
            <br />
            <br />
            『漕ぎ出せ！ソクバイ海Ⅸ』主催組織
            <br />
            戦挙管理委員会
            <br />
            <br />
            📩 お申し込みはこちら：
            <a
              href="https://forms.gle/a2KbpGncFDF9urcJ9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Googleフォーム
            </a>
          </CardDescription>
        </CardContent>
      </Card>
    </CardWrapper>
  );
};

export default Page;
