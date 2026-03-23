"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function SponsorsContent() {
    const { t } = useLanguage();

    return (
        <section className="section">
            <div className="container">
                <h2 className="section-title">{t('sponsors.title')}</h2>
                <p className="section-desc" dangerouslySetInnerHTML={{ __html: t('sponsors.description') }} />

                <h3 className="sponsors-subtitle">{t('sponsors.waysToSupportTitle')}</h3>
                <div className="about-grid">
                    <div className="about-card">
                        <h3>{t('sponsors.monetaryTitle')}</h3>
                        <p>{t('sponsors.monetaryDesc')}</p>
                    </div>
                    <div className="about-card">
                        <h3>{t('sponsors.inKindTitle')}</h3>
                        <p>{t('sponsors.inKindDesc')}</p>
                    </div>
                </div>

                <h3 className="sponsors-subtitle">{t('sponsors.tiersTitle')}</h3>
                <div className="sponsor-tiers">
                    {/* Platinum */}
                    <div className="sponsor-tier">
                        <h4>{t('sponsors.tiersPlatinumName')}</h4>
                        <p className="sponsor-price">{t('sponsors.tiersPlatinumPrice')}</p>
                        <ul>
                            <li>{t('sponsors.benePlat1')}</li>
                            <li>{t('sponsors.benePlat2')}</li>
                            <li>{t('sponsors.benePlat3')}</li>
                            <li>{t('sponsors.benePlat4')}</li>
                        </ul>
                    </div>
                    {/* Gold */}
                    <div className="sponsor-tier">
                        <h4>{t('sponsors.tiersGoldName')}</h4>
                        <p className="sponsor-price">{t('sponsors.tiersGoldPrice')}</p>
                        <ul>
                            <li>{t('sponsors.beneGold1')}</li>
                            <li>{t('sponsors.beneGold2')}</li>
                            <li>{t('sponsors.beneGold3')}</li>
                        </ul>
                    </div>
                    {/* Silver */}
                    <div className="sponsor-tier">
                        <h4>{t('sponsors.tiersSilverName')}</h4>
                        <p className="sponsor-price">{t('sponsors.tiersSilverPrice')}</p>
                        <ul>
                            <li>{t('sponsors.beneSilv1')}</li>
                            <li>{t('sponsors.beneSilv2')}</li>
                        </ul>
                    </div>
                    {/* Bronze */}
                    <div className="sponsor-tier">
                        <h4>{t('sponsors.tiersBronzeName')}</h4>
                        <p className="sponsor-price">{t('sponsors.tiersBronzePrice')}</p>
                        <ul>
                            <li>{t('sponsors.beneBron1')}</li>
                            <li>{t('sponsors.beneBron2')}</li>
                        </ul>
                    </div>
                </div>
                <p className="sponsor-note">{t('sponsors.inKindNote')}</p>

                <h3 className="sponsors-subtitle">{t('sponsors.whereMoneyGoesTitle')}</h3>
                <ul className="sponsor-purposes">
                    <li dangerouslySetInnerHTML={{ __html: t('sponsors.moneyDonationPledge') }} />
                    <li dangerouslySetInnerHTML={{ __html: t('sponsors.moneyVenue') }} />
                    <li dangerouslySetInnerHTML={{ __html: t('sponsors.moneyDelegate') }} />
                </ul>

                <h3 className="sponsors-subtitle">{t('sponsors.contactTitle')}</h3>
                <p className="contact-lead">{t('sponsors.contactLead')}</p>
                <a className="contact-email" href="mailto:information@seamun.com">information@seamun.com</a>
                <p className="contact-note">{t('sponsors.contactSecGen')} <a href="mailto:juleskittoastrop@gmail.com">juleskittoastrop@gmail.com</a></p>
            </div>
        </section>
    );
}
