import {
  ComponentParams,
  ComponentRendering,
  ImageField,
  LinkField,
  RichTextField,
  TextField,
  Image,
} from '@sitecore-content-sdk/nextjs';
import Link from 'next/link';
import React from 'react';

interface Fields {
  TitleOne: TextField;
  TitleTwo: TextField;
  TitleThree: TextField;
  TitleFour: TextField;
  TitleFive: TextField;
  CopyrightText: TextField;
  PolicyText: LinkField;
  TermsText: LinkField;
  Logo: ImageField;
  Description: RichTextField;
}

type FooterProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: FooterProps) => {
  // rendering item id
  const id = props.params.RenderingIdentifier;

  return (
    <>
      <div className="flex w-full bg-[#ececed]" id={id}>
        <div className="max-w-outer-content relative mx-auto w-full px-4 sm:px-8 md:px-15 lg:px-30">
          <div className="flex flex-col py-10">
            <div data-att="false">
              <div
                data-disclosure="01 General Product Disclosure"
                className="rich-text p3 text-primarygray false"
                data-component="Disclosure"
              >
                <div className="disclosure w-full">
                  <p>
                    Any investment or strategy mentioned herein may not be appropriate for every
                    investor. There can be no assurance that investment objectives will be met.
                    Products and services listed are available only to residents of this
                    jurisdiction and may only be available to certain categories of investors. The
                    information on this website does not constitute an offer for products or
                    services, or a solicitation of an offer to any persons outside of this
                    jurisdiction who are prohibited from receiving such information under applicable
                    laws and regulations.&nbsp;Nothing on this webpage should be construed as advice
                    and is therefore not a recommendation to buy or sell shares.
                  </p>
                </div>
              </div>
            </div>
            <div data-att="true">
              <div className="rich-text p3 text-primarygray false">
                <div className="disclosure w-full">
                  <p>
                    <strong>
                      Please carefully consider the William Blair Funds investment objectives,
                      risks, charges, and expenses before investing. This and other information is
                      contained in the Funds prospectus and summary prospectus, which you may obtain
                      by calling 1-800-742-7272. Read the prospectus and summary prospectus
                      carefully before investing. Investing includes the risk of loss.
                    </strong>
                  </p>
                  <p>
                    The William Blair Funds are distributed by William Blair &amp; Company, L.L.C.,
                    member FINRA/SIPC.
                  </p>
                </div>
              </div>
            </div>
            <div data-att="false">
              <div className="rich-text p3 text-primarygray false">
                <div className="disclosure w-full">
                  <p>
                    Information and opinions expressed are those of the authors and may not reflect
                    the opinions of other investment teams within William Blair Investment
                    Management, LLC, or affiliates. Factual information has been taken from sources
                    we believe to be reliable, but its accuracy, completeness or interpretation
                    cannot be guaranteed. Information is current as of the date appearing in this
                    material only and subject to change without notice. Statements concerning
                    financial market trends are based on current market conditions, which will
                    fluctuate. This material may include estimates, outlooks, projections, and other
                    forward-looking statements. Due to a variety of factors, actual events may
                    differ significantly from those presented.
                  </p>
                  <p>
                    Investing involves risks, including the possible loss of principal. Equity
                    securities may decline in value due to both real and perceived general market,
                    economic, and industry conditions. The securities of smaller companies may be
                    more volatile and less liquid than securities of larger companies. Investing in
                    foreign denominated and/or domiciled securities may involve heightened risk due
                    to currency fluctuations, and economic and political risks. These risks may be
                    enhanced in emerging markets and frontier markets. Investing in the bond market
                    is subject to certain risks including market, interest rate, issuer, credit, and
                    inflation risk. High-yield, lower-rated, securities involve greater risk than
                    higher-rated securities. Different investment styles may shift in and out of
                    favor depending on market conditions. Diversification does not ensure against
                    loss.
                  </p>
                  <p>
                    Past performance is not indicative of future returns. References to specific
                    companies are for illustrative purposes only and should not be construed as
                    investment advice or a recommendation to buy or sell any security.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                data-disclosure="04a US Jurisdictional Disclosure"
                className="rich-text p3 text-primarygray false"
                data-component="Disclosure"
              >
                <div className="disclosure w-full">
                  <p>
                    William Blair Investment Management, LLC is an investment adviser registered
                    with the U.S. Securities and Exchange Commission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full">
        <div data-component="Footer" className="relative">
          <div className="bg-primary flex w-full py-12 text-white">
            <div className="max-w-outer-content mx-auto flex w-full flex-col gap-y-7 px-4 sm:px-8 md:flex-row md:px-15 lg:px-30">
              <div className="left-block mr-6 flex w-full flex-col justify-between lg:mr-0">
                <div className="social-icons mb-7 flex gap-2">
                  <Link target="_blank" aria-label="LinkedIn" href="#">
                    <Image
                      width="45"
                      height="45"
                      src="https://im.williamblair.com/_next/image?url=https%3A%2F%2Fmedia.im.williamblair.com%2Fv1%2Fmedia%2Fedge%2Fimages%2Fwilliamblaib9c8-wbim74f8-wbimprod42cd-8345%2Fmedia%2Ficons%2Fsocial-icons%2Ficon-linkedin.svg%3Fh%3D45%26iar%3D0%26w%3D45&w=96&q=75"
                    />
                  </Link>
                  <Link
                    target="_blank"
                    aria-label="X"
                    href="https://www.instagram.com/williamblairim/?utm_source=active_microsite&amp;utm_medium=website&amp;utm_campaign=activeneverrests-2018&amp;utm_content=instagramfollow"
                  >
                    <Image
                      alt="Instagram"
                      loading="lazy"
                      width="45"
                      height="45"
                      src="/_next/image?url=https%3A%2F%2Fmedia.im.williamblair.com%2Fv1%2Fmedia%2Fedge%2Fimages%2Fwilliamblaib9c8-wbim74f8-wbimprod42cd-8345%2Fmedia%2Ficons%2Fsocial-icons%2Ficon-instagram.svg%3Fiar%3D0"
                    />
                  </Link>
                  <Link target="_blank" href="https://www.youtube.com/@WilliamBlairInvMgmt">
                    <Image
                      alt="YouTube"
                      loading="lazy"
                      width="45"
                      height="45"
                      srcset="/_next/image?url=https%3A%2F%2Fmedia.im.williamblair.com%2Fv1%2Fmedia%2Fedge%2Fimages%2Fwilliamblaib9c8-wbim74f8-wbimprod42cd-8345%2Fmedia%2Ficons%2Fsocial-icons%2Ficon-youtube.svg%3Fiar%3D0&amp;w=48&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fmedia.im.williamblair.com%2Fv1%2Fmedia%2Fedge%2Fimages%2Fwilliamblaib9c8-wbim74f8-wbimprod42cd-8345%2Fmedia%2Ficons%2Fsocial-icons%2Ficon-youtube.svg%3Fiar%3D0&amp;w=96&amp;q=75 2x"
                      src="/_next/image?url=https%3A%2F%2Fmedia.im.williamblair.com%2Fv1%2Fmedia%2Fedge%2Fimages%2Fwilliamblaib9c8-wbim74f8-wbimprod42cd-8345%2Fmedia%2Ficons%2Fsocial-icons%2Ficon-youtube.svg%3Fiar%3D0&amp;w=96&amp;q=75"
                    />
                  </Link>
                </div>
                <div className="contact-row">
                  <p className="p5 mb-2 font-bold"></p>
                  <div className="flex gap-2">
                    <div>
                      <Link
                        className="footer-link uppercase"
                        target=""
                        href="/contact-us#intermediary-north-america-tab"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-y-7">
                <div className="p5 flex flex-col gap-y-2 text-white">
                  <p className="text-white">
                    The content contained in this site is intended as informational or educational
                    in nature and does not constitute investment advice or a recommendation of any
                    investment strategy or product for a particular investor. Investment advice and
                    recommendations can be provided only after careful consideration of an investors
                    objectives, guidelines, and restrictions. Investors should consult a financial
                    professional/financial consultant or investment adviser before making any
                    investment decisions. Investing includes the risk of loss.
                  </p>
                  <p className="text-white">
                    Copyright © 2026 William Blair. William Blair is a registered trademark of
                    William Blair &amp; Company, L.L.C. “William Blair” refers to William Blair
                    Investment Management, LLC and affiliates.
                  </p>
                </div>
                <div className="footer-links">
                  <div className="flex flex-wrap gap-5">
                    <div>
                      <Link className="footer-link" target="" href="/terms-of-use">
                        Terms of Use
                      </Link>
                    </div>
                    <div>
                      <Link
                        className="footer-link"
                        target="_blank"
                        href="https://www.williamblair.com/disclosures"
                      >
                        Disclosures
                      </Link>
                    </div>
                    <div>
                      <Link
                        className="footer-link"
                        target="_blank"
                        href="https://www.williamblair.com/privacy-and-security"
                      >
                        Privacy and Security
                      </Link>
                    </div>
                    <div>
                      <Link className="ot-sdk-show-settings footer-link cursor-pointer" href="#">
                        Cookie Settings
                      </Link>
                    </div>
                    <div>
                      <Link
                        className="footer-link"
                        target="_blank"
                        href="https://www.williamblair.com/accessibility"
                      >
                        Accessibility
                      </Link>
                    </div>
                    <div>
                      <Link className="footer-link" target="" href="/glossary">
                        Glossary
                      </Link>
                    </div>
                    <div>
                      <Link
                        className="footer-link"
                        target="_blank"
                        href="https://brokercheck.finra.org/"
                      >
                        FINRA BrokerCheck
                      </Link>
                    </div>
                    <div>
                      <Link
                        className="footer-link"
                        target="_blank"
                        href="https://www.williamblair.com/"
                      >
                        Global Site
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
