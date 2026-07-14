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
          <CardTitle>サークル参加をする総理の皆さんへ</CardTitle>
          <CardSubTitle>はじめに</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            当イベントにて二次創作作品の頒布や展示を希望される総理には、サークル参加の事前申込をお願いしております。
            <br />
            下記の諸注意をお読みいただいた上で、所定の方法にてお申し込みください。
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
          <CardTitle>サークル参加について</CardTitle>
          <CardSubTitle>サークル参加資格</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            ☆「政剣マニフェスティア」の二次創作作品を1点以上頒布または展示できること
            <br />
            ☆ 開催当日までメールで《確実に》連絡可能であること
            <br />☆
            &quot;戦挙権&quot;を持っている（「政剣マニフェスティア」のプレイヤーである）こと
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>サークル参加費用</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <strong>1スペース 4000円</strong>
            <br />
            [含まれるもの]
            <br />
            ・長机半分（幅750mm×奥行450mm）
            <br />
            ・イス1脚
            <br />
            ・入場可能人数 <strong>1名</strong>
            <br />
            ・パンフレット1部
            <br />
            ※追加入場（イス・パンフレット付き） 500円/1名+1脚
            <br />
            <br />
            ※複数スペース申込・合体申込可能
            <br />
            例）2スペース申込 8000円
            <br />
            [含まれるもの]
            <br />
            ・長机1つ分（幅1500mm×奥行450mm）
            <br />
            ・イス2脚
            <br />
            ・入場可能人数 <strong>2名</strong>
            <br />
            ・パンフレット2部
            <br />
            ※追加入場証（イス・パンフレット付き） 500円/1名+1脚
            <br />
            <br />
            今回は、サークル参加は{" "}
            <strong>当日のサークル受付時のお支払い</strong> となります。
            <br />
            フォームからお申し込みいただき、当日現金でお支払いください。
            <br />
            <br />
            当日のサークル受付時に「サークル参加のご案内」メールをご提示いただき、サークル参加費をお支払いください。
            <br />
            メールをご準備がない場合、ご入場に時間がかかる可能性があります。
            <br />
            詳細はサークル配置後に送付する「サークル参加のご案内」メールをご確認ください。
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>サークル申込締切</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <strong>2026年8月11日（火曜日） 23:59:59まで</strong>
            <br />
            ※サークル配置後のキャンセルはお受けできません。
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>参加申込方法</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            8/11までに、以下の2つを完了させてください。
            <br />
            <br />
            1. 「サークル参加フォーム」からサークル情報をご登録ください。
            <br />
            2.
            「サークルカット登録フォーム」からサークルカットをご登録ください。
            <br />
            <br />
            フォームへのリンクは本ページの最下部にあります。この後の注意事項も必ずお読みいただいた上で、サークル参加登録をお願い致します。
            <br />
            <br />
            ※サークルカットは、サークル参加表明後、日を置いての登録も可能としていますが、必ず登録をお願い致します。
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>サークルカットについて</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            psd形式のテンプレートを用意しております。ご活用ください。
            <br />
            作成上の注意事項は、サークルカットのテンプレート内にある「カット作成の注意点」に記載しております。必ずお読みください。
            <br />
            ※アナログ原稿およびオフラインでのサークルカット受付は行いません。
            <br />
            <br />
            <a href="/assets/bin/cut_win.zip">
              サークルカットテンプレート(ZIP形式)
            </a>
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>宅配便による搬入・搬出</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            ヤマト運輸の宅急便をご利用いただけます。
            <br />
            伝票の記載例など、注意点は後日サークル参加総理の皆様に改めてご案内します。
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardSubTitle>その他</CardSubTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            ・イベント当日、戦挙管理委員（スタッフ）が頒布物の確認を行うことがあります。ご協力をお願いいたします。
            <br />
            ・頒布印刷物について、奥付または奥付に準ずる欄に著者名やサークル名の表記がない場合、頒布をお断りすることがあります。
            <br />
            ・申込フォームの「成人向け作品」欄にて「無」を選択されたサークル様は、形態を問わず成人向け作品の頒布および展示が禁止となります。変更がある場合は、事前に戦挙管理委員会までご連絡ください。
            <br />
            ・会場内電源の使用には、戦挙管理委員会に許可を得てください。無許可で使用を行なっていた場合、使用中止をお願いする場合がございます。
            <br />
            ・駐車場のご用意はできません。
            <strong>
              搬入・搬出時に車両を使用する場合は、事前に戦挙管理委員会までご相談ください
            </strong>
            。
            <br />
            ・飲食は可能ですが、会場を汚されないようにお願いいたします。
            <br />
            ・ゴミは所定の場所にお捨てください。また、ゴミの分別にご協力ください。
            <br />
            ・会場内非常口の前には荷物を置かないようにお願いいたします。
            <br />
            ・その他お困りの事や不明点がございましたら、最寄りの戦挙管理委員までお声がけください。
            <br />
            ・会場内におけるマスクの着用は任意とします。
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
          <CardTitle>サークル参加フォーム</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <a
              href="https://forms.gle/L67csamcDqkSMA1S6"
              target="_blank"
              rel="noopener noreferrer"
            >
              サークル参加する
            </a>
            <br />
            <a
              href="https://forms.gle/we1gMCimQ6NvdvmRA"
              target="_blank"
              rel="noopener noreferrer"
            >
              サークルカットを登録する
            </a>
          </CardDescription>
        </CardContent>
      </Card>
    </CardWrapper>
  );
};

export default Page;
