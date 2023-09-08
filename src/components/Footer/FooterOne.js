import Link from "next/link";
import SubcribeEmail from "../Other/SubcribeEmail";

import SocialIcons from "../Other/SocialIcons";
import footerLinks from "../../data/footer/links.json";
import footerInfomation from "../../data/footer/info.json";

export default function FooterOne() {
  return (
    <div className="pt-10">
      <div className="container">
        <div className="max-md:flex-col flex justify-between items-center flex-wrap pb-10 mb-[50px] border-b-[1px] border-[#e1e1e1]">
          <div className="max-md:mb-[17px]">
            <Link href="/">
              <a className="inline-block">
                <img
                  src={"/assets/images/logo.png"}
                  alt="Logo"
                  className="w-[100px] h-full"
                />
              </a>
            </Link>
          </div>
          {/* TODO: newsletter <div className="footer-one__header__newsletter">
            <span>Subscribe Newletter:</span>
            <SubcribeEmail
              mailchimpUrl="https://jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&id=ec6f32bf5e"
              placeholder="Enter your email"
              btnContent={<i className="fas fa-paper-plane" />}
              className="footer-one-newsletter"
            />
          </div> */}
          <SocialIcons className="inline-flex gap-[10px]" />
        </div>
        <div className="pb-[50px]">
          <h5 className="font-semibold">Contact info</h5>
          <p className="text-[#888] font-normal text-[0.875em] leading-[1.7142857143em] mb-2.5">
            Address:{" "}
            <span className="text-black">{footerInfomation.address}</span>
          </p>
          <p className="text-[#888] font-normal text-[0.875em] leading-[1.7142857143em] mb-2.5">
            Phone: <span className="text-black">{footerInfomation.phone}</span>
          </p>
          <p className="text-[#888] font-normal text-[0.875em] leading-[1.7142857143em]">
            Email: <span className="text-black">{footerInfomation.email}</span>
          </p>
          {/* <p>
                  Opentime: <span>{footerInfomation.open}</span>
                </p> */}
        </div>
      </div>
      <div className="bg-[#f7f5f4] py-[1em]">
        <div className="container">
          <div className="flex justify-between flex-wrap">
            <p className="text-[#888] text-[0.875em] leading-none font-normal">
              © Copyright 2021 Skinnovation, Inc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
