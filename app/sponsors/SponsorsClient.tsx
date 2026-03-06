"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Language = "en" | "th";

const translations = {
    en: {
        title: "Sponsor SEAMUN I",
        description: (
            <>
                Support a student-led, non-profit <strong>mid- and high school</strong> Model UN conference (grades 7–12). All conference surplus is donated to the Thai Red Cross Society.
            </>
        ),
        waysToSupportTitle: "Ways to support",
        monetaryTitle: "Monetary sponsorship",
        monetaryDesc: "One-off or tiered financial support. Funds go toward venue, materials, and the conference donation pledge.",
        inKindTitle: "In-kind sponsorship",
        inKindDesc: "Venue provision, catering, printing, AV equipment, or other goods and services that reduce conference costs and increase the amount we can donate.",
        tiersTitle: "Sponsorship tiers & benefits",
        tiers: {
            platinum: { name: "Platinum", price: "100,000 THB+" },
            gold: { name: "Gold", price: "50,000 – 99,999 THB" },
            silver: { name: "Silver", price: "25,000 – 49,999 THB" },
            bronze: { name: "Bronze", price: "10,000 – 24,999 THB" }
        },
        benefits: {
            platinum: [
                "Logo on main stage and all materials",
                "Mention in opening and closing ceremonies",
                "Listing as Platinum Sponsor on website and programme",
                "Optional short address or message to delegates"
            ],
            gold: [
                "Logo on website and programme",
                "Mention in opening ceremony",
                "Listing as Gold Sponsor"
            ],
            silver: [
                "Logo on website and programme",
                "Listing as Silver Sponsor"
            ],
            bronze: [
                "Name on website and programme",
                "Listing as Bronze Sponsor"
            ]
        },
        inKindNote: "In-kind sponsorship is valued at fair market rate. Custom tiers and benefits can be discussed.",
        whereMoneyGoesTitle: "Where the money goes",
        moneyDonationPledge: "<strong>Donation pledge</strong> — 100% of conference surplus is donated to the Thai Red Cross Society.",
        moneyVenue: "<strong>Venue & logistics</strong> — Space for 250 participants, 1 main plenary and 10 breakout rooms, AV and basic catering.",
        moneyDelegate: "<strong>Delegate experience</strong> — Materials, nameplates, and running a smooth two-day conference (23–24 January 2027).",
        contactTitle: "Contact",
        contactLead: "To discuss sponsorship or request a partnership pack:",
        contactSecGen: "Secretary General:"
    },
    th: {
        title: "ร่วมเป็นผู้สนับสนุน SEAMUN I",
        description: (
            <>
                ร่วมสนับสนุนการประชุมจำลองสหประชาชาติ (Model UN) <strong>ระดับมัธยมศึกษา</strong> (ระดับชั้น ม.1-ม.6) ซึ่งจัดตั้งโดยกลุ่มนักเรียนและไม่แสวงหาผลกำไร โดยรายได้หลังหักค่าใช้จ่ายทั้งหมดจากการจัดงาน จะนำไปบริจาคให้แก่สภากาชาดไทย
            </>
        ),
        waysToSupportTitle: "รูปแบบการสนับสนุน",
        monetaryTitle: "การสนับสนุนด้านเงินทุน",
        monetaryDesc: "การสนับสนุนทางการเงิน แบบครั้งเดียวหรือตามแพ็กเกจผู้สนับสนุน ทุนสนับสนุนจะนำไปใช้สำหรับค่าสถานที่ อุปกรณ์การจัดการประชุม และสมทบทุนเพื่อการกุศล",
        inKindTitle: "การสนับสนุนด้านสิ่งของหรือบริการ (In-kind)",
        inKindDesc: "การเอื้อเฟื้อสถานที่ การจัดเลี้ยง อาหารว่าง งานพิมพ์ อุปกรณ์โสตทัศนูปกรณ์ หรือสินค้าและบริการอื่น ๆ ที่ช่วยลดต้นทุนการจัดงาน และเพิ่มยอดบริจาคเพื่อการกุศลให้ได้มากที่สุด",
        tiersTitle: "แพ็คเกจผู้สนับสนุนและสิทธิประโยชน์",
        tiers: {
            platinum: { name: "แพลตตินัม (Platinum)", price: "100,000 บาทขึ้นไป" },
            gold: { name: "โกลด์ (Gold)", price: "50,000 – 99,999 บาท" },
            silver: { name: "ซิลเวอร์ (Silver)", price: "25,000 – 49,999 บาท" },
            bronze: { name: "บรอนซ์ (Bronze)", price: "10,000 – 24,999 บาท" }
        },
        benefits: {
            platinum: [
                "แสดงโลโก้บนเวทีหลักและสื่อประชาสัมพันธ์ทั้งหมดของการประชุม",
                "ประกาศเกียรติคุณและกล่าวขอบคุณในพิธีเปิดและพิธีปิด",
                "ระบุชื่อและโลโก้ในฐานะผู้สนับสนุนระดับ Platinum บนเว็บไซต์และสูจิบัตร",
                "ได้รับเกียรติให้กล่าวปาฐกถา หรือส่งข้อความสั้น ๆ ถึงผู้เข้าร่วมประชุม (หากต้องการ)"
            ],
            gold: [
                "แสดงโลโก้บนเว็บไซต์และสูจิบัตรของการประชุม",
                "ประกาศเกียรติคุณและกล่าวขอบคุณในพิธีเปิด",
                "ระบุชื่อในฐานะผู้สนับสนุนระดับ Gold"
            ],
            silver: [
                "แสดงโลโก้บนเว็บไซต์และสูจิบัตร",
                "ระบุชื่อในฐานะผู้สนับสนุนระดับ Silver"
            ],
            bronze: [
                "ระบุชื่อบนเว็บไซต์และสูจิบัตร",
                "ระบุชื่อในฐานะผู้สนับสนุนระดับ Bronze"
            ]
        },
        inKindNote: "การสนับสนุนด้านสิ่งของหรือบริการ (In-kind) จะถูกประเมินมูลค่าตามราคาตลาด ทั้งนี้ ท่านสามารถพูดคุยเงื่อนไขเพื่อปรับเปลี่ยนระดับและสิทธิประโยชน์ให้เหมาะสมได้",
        whereMoneyGoesTitle: "เงินสนับสนุนของคุณไปที่ไหน?",
        moneyDonationPledge: "<strong>เงินบริจาคเพื่อการกุศล</strong> — 100% ของรายได้หลังหักค่าใช้จ่ายจากการจัดงาน จะนำไปบริจาคให้แก่สภากาชาดไทย",
        moneyVenue: "<strong>สถานที่และโลจิสติกส์</strong> — พื้นที่รองรับผู้เข้าร่วม 250 คน ประกอบด้วยห้องประชุมใหญ่ 1 ห้อง และห้องประชุมย่อย 10 ห้อง รวมถึงอุปกรณ์ภาพและเสียง (AV) และการจัดเลี้ยงพื้นฐาน",
        moneyDelegate: "<strong>ประสบการณ์ของผู้เข้าร่วม</strong> — อุปกรณ์การประชุม ป้ายชื่อ และการบริหารจัดการเพื่อให้การประชุมระยะเวลา 2 วันเต็ม (23-24 มกราคม 2570) ดำเนินไปอย่างราบรื่น",
        contactTitle: "ติดต่อเรา",
        contactLead: "ติดต่อเพื่อหารือเกี่ยวกับการสนับสนุน หรือขอรับเอกสารข้อเสนอสำหรับผู้สนับสนุน:",
        contactSecGen: "เลขาธิการการประชุม (Secretary General):"
    }
};

export default function SponsorsClient() {
    const [lang, setLang] = useState<Language>("en");
    const t = translations[lang];

    return (
        <>
            <Header />
            <main>
                <section className="section">
                    <div className="container">

                        {/* Language Toggle */}
                        <div className="language-toggle" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '2rem' }}>
                            <div className="toggle-bg" style={{ display: 'flex', background: 'var(--surface)', borderRadius: '2rem', border: '1px solid var(--border)', overflow: 'hidden' }}>
                                <button
                                    onClick={() => setLang("en")}
                                    style={{
                                        padding: '0.5rem 1rem',
                                        border: 'none',
                                        background: lang === 'en' ? 'var(--navy)' : 'transparent',
                                        color: lang === 'en' ? '#fff' : 'inherit',
                                        fontWeight: lang === 'en' ? '600' : '400',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                        fontFamily: 'inherit'
                                    }}
                                >
                                    EN
                                </button>
                                <button
                                    onClick={() => setLang("th")}
                                    style={{
                                        padding: '0.5rem 1rem',
                                        border: 'none',
                                        background: lang === 'th' ? 'var(--navy)' : 'transparent',
                                        color: lang === 'th' ? '#fff' : 'inherit',
                                        fontWeight: lang === 'th' ? '600' : '400',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                        fontFamily: 'inherit'
                                    }}
                                >
                                    TH
                                </button>
                            </div>
                        </div>

                        <h2 className="section-title">{t.title}</h2>
                        <p className="section-desc">
                            {t.description}
                        </p>

                        <h3 className="sponsors-subtitle">{t.waysToSupportTitle}</h3>
                        <div className="about-grid">
                            <div className="about-card">
                                <h3>{t.monetaryTitle}</h3>
                                <p>{t.monetaryDesc}</p>
                            </div>
                            <div className="about-card">
                                <h3>{t.inKindTitle}</h3>
                                <p>{t.inKindDesc}</p>
                            </div>
                        </div>

                        <h3 className="sponsors-subtitle">{t.tiersTitle}</h3>
                        <div className="sponsor-tiers">
                            {/* Platinum */}
                            <div className="sponsor-tier">
                                <h4>{t.tiers.platinum.name}</h4>
                                <p className="sponsor-price">{t.tiers.platinum.price}</p>
                                <ul>
                                    {t.benefits.platinum.map((benefit, i) => (
                                        <li key={i}>{benefit}</li>
                                    ))}
                                </ul>
                            </div>
                            {/* Gold */}
                            <div className="sponsor-tier">
                                <h4>{t.tiers.gold.name}</h4>
                                <p className="sponsor-price">{t.tiers.gold.price}</p>
                                <ul>
                                    {t.benefits.gold.map((benefit, i) => (
                                        <li key={i}>{benefit}</li>
                                    ))}
                                </ul>
                            </div>
                            {/* Silver */}
                            <div className="sponsor-tier">
                                <h4>{t.tiers.silver.name}</h4>
                                <p className="sponsor-price">{t.tiers.silver.price}</p>
                                <ul>
                                    {t.benefits.silver.map((benefit, i) => (
                                        <li key={i}>{benefit}</li>
                                    ))}
                                </ul>
                            </div>
                            {/* Bronze */}
                            <div className="sponsor-tier">
                                <h4>{t.tiers.bronze.name}</h4>
                                <p className="sponsor-price">{t.tiers.bronze.price}</p>
                                <ul>
                                    {t.benefits.bronze.map((benefit, i) => (
                                        <li key={i}>{benefit}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <p className="sponsor-note">{t.inKindNote}</p>

                        <h3 className="sponsors-subtitle">{t.whereMoneyGoesTitle}</h3>
                        <ul className="sponsor-purposes">
                            <li dangerouslySetInnerHTML={{ __html: t.moneyDonationPledge }} />
                            <li dangerouslySetInnerHTML={{ __html: t.moneyVenue }} />
                            <li dangerouslySetInnerHTML={{ __html: t.moneyDelegate }} />
                        </ul>

                        <h3 className="sponsors-subtitle">{t.contactTitle}</h3>
                        <p className="contact-lead">{t.contactLead}</p>
                        <a className="contact-email" href="mailto:information@seamun.com">information@seamun.com</a>
                        <p className="contact-note">{t.contactSecGen} <a href="mailto:juleskittoastrop@gmail.com">juleskittoastrop@gmail.com</a></p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
