import React, { useEffect } from "react";
import styled from "styled-components";
import "../styles/terms.css";
import logoDeepColt from "../assets/images/logo_deepcolt_dark.png";
import logo from "../assets/images/icon.png";
import { Link } from "react-router-dom";

const Container = styled.div`
    background-color: #fafafa;
`

const MainContainer = styled.div`
    padding: 0 25%;

    @media (max-width: 768px) {
        padding: 0 5%;
    }
`

const Title = styled.h1`
    font-size: 3.5rem;
    font-weight: bold;
    margin-top: 5rem;
    margin-bottom: 2rem;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`

const Navigation = styled.nav`
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
`

const Logo = styled.img`
    height: 50px;
`

const Content = styled.div`
    background-color: #fff;
    padding: 5%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    & p {
        margin: 2rem 0;
    }

    & ul {
        padding-left: 2rem;
    }

`


const Terms = () => {

    useEffect(() => {
        document.title = "Terms & Conditions d'utilisation";
    }, []);


    return (
        <Container>
            <MainContainer>
                <Navigation>
                    <Link to="/">
                        <Logo src={logo} alt="Logo Bongola Chat" />
                    </Link>
                    <a href="https://deepcolt.com" target="_blank" rel="noreferrer">
                        <Logo src={logoDeepColt} alt="Logo Deepcolt" />
                    </a>
                </Navigation>
                <Title>Termes et Conditions d'utilisation.</Title>
                <Content>
                    <p className="c7">
                        <span className="c10"
                        >En t&eacute;l&eacute;chargeant ou en utilisant l&#39;application, ces
                            conditions s&#39;appliqueront automatiquement &agrave; vous - vous devez
                            donc vous assurer de les lire attentivement avant d&#39;utiliser
                            l&#39;application. Vous n&#39;&ecirc;tes pas autoris&eacute; &agrave;
                            copier ou modifier l&#39;application, toute partie de l&#39;application
                            ou nos marques de commerce de quelque mani&egrave;re que ce soit. Vous
                            n&#39;&ecirc;tes pas autoris&eacute; &agrave; tenter d&#39;extraire le
                            code source de l&#39;application, et vous ne devez pas non plus essayer
                            de traduire l&#39;application dans d&#39;autres langues ou de
                            cr&eacute;er des versions d&eacute;riv&eacute;es. L&#39;application
                            elle-m&ecirc;me, ainsi que toutes les marques, droits d&#39;auteur,
                            droits de base de donn&eacute;es et autres droits de
                            propri&eacute;t&eacute; intellectuelle qui s&#39;y rapportent,
                            appartiennent toujours &agrave; </span
                        ><span className="c10">DeepColt.</span>
                    </p>
                    <p className="c7 c9"><span className="c0"></span></p>
                    <p className="c7">
                        <span className="c0"
                        >Deepcolt s&#39;engage &agrave; faire en sorte que l&#39;application
                            soit aussi utile et efficace que possible. Pour cette raison, nous nous
                            r&eacute;servons le droit d&#39;apporter des modifications &agrave;
                            l&#39;application ou de facturer ses services, &agrave; tout moment et
                            pour quelque raison que ce soit. Nous ne vous facturerons jamais
                            l&#39;application ou ses services sans vous indiquer tr&egrave;s
                            clairement ce que vous payez.</span
                        >
                    </p>
                    <p className="c7 c9"><span className="c0"></span></p>
                    <p className="c7">
                        <span className="c0"
                        >L&#39;application Bongola Chat stocke et traite les donn&eacute;es
                            personnelles que vous nous avez fournies pour fournir notre service. Il
                            est de votre responsabilit&eacute; de prot&eacute;ger votre
                            t&eacute;l&eacute;phone et l&#39;acc&egrave;s &agrave;
                            l&#39;application. Nous vous recommandons donc de ne pas jailbreaker ou
                            rooter votre t&eacute;l&eacute;phone, qui est le processus de
                            suppression des restrictions et limitations logicielles impos&eacute;es
                            par le syst&egrave;me d&#39;exploitation officiel de votre appareil.
                            Cela pourrait rendre votre t&eacute;l&eacute;phone vuln&eacute;rable aux
                            logiciels malveillants/virus/programmes malveillants, compromettre les
                            fonctions de s&eacute;curit&eacute; de votre t&eacute;l&eacute;phone et
                            cela pourrait signifier que l&#39;application Bongola chat ne
                            fonctionnera pas correctement ou pas du tout.</span
                        >
                    </p>
                    <p className="c7 c9"><span className="c0"></span></p>
                    <p className="c7">
                        <span className="c0"
                        >L&#39;application utilise des services tiers qui d&eacute;clarent leurs
                            termes et conditions.</span
                        >
                    </p>
                    <p className="c7 c9"><span className="c0"></span></p>
                    <p className="c7">
                        <span className="c0"
                        >Lien vers les conditions g&eacute;n&eacute;rales des fournisseurs de
                            services tiers utilis&eacute;s par l&#39;application</span
                        >
                    </p>
                    <p className="c7 c9"><span className="c0"></span></p>
                    <ul className="c6 lst-kix_tsv8mgekgeqp-0 start">
                        <li className="c4 li-bullet-0">
                            <span className="c11"
                            ><a
                                className="c2"
                                href="https://www.google.com/url?q=https://policies.google.com/terms&amp;sa=D&amp;source=editors&amp;ust=1658916003151749&amp;usg=AOvVaw06_a3Z0Ojjx45al0sVOfLD"
                            >Services Google Play</a
                                ></span
                            >
                        </li>
                        <li className="c4 li-bullet-0">
                            <span className="c11"
                            ><a
                                className="c2"
                                href="https://www.google.com/url?q=https://developers.google.com/admob/terms&amp;sa=D&amp;source=editors&amp;ust=1658916003152066&amp;usg=AOvVaw0o2h6aqGnZt6LR9gfzdQhD"
                            >AdMob</a
                                ></span
                            >
                        </li>
                        <li className="c4 li-bullet-0">
                            <span className="c11"
                            ><a
                                className="c2"
                                href="https://www.google.com/url?q=https://firebase.google.com/terms/analytics&amp;sa=D&amp;source=editors&amp;ust=1658916003152285&amp;usg=AOvVaw0MutgP8Ajc-V79PTd6Em5w"
                            >Google Analytics pour Firebase</a
                                ></span
                            >
                        </li>
                        <li className="c4 li-bullet-0">
                            <span className="c11"
                            ><a
                                className="c2"
                                href="https://www.google.com/url?q=https://firebase.google.com/terms/crashlytics&amp;sa=D&amp;source=editors&amp;ust=1658916003152502&amp;usg=AOvVaw285OAWKbtCa130WNS7dhAE"
                            >Firebase Crashlytics</a
                                ></span
                            >
                        </li>
                        <li className="c4 li-bullet-0">
                            <span className="c11"
                            ><a
                                className="c2"
                                href="https://www.google.com/url?q=https://www.facebook.com/legal/terms/plain_text_terms&amp;sa=D&amp;source=editors&amp;ust=1658916003152709&amp;usg=AOvVaw0mgkDfNNiBnmm2OvxbWwAr"
                            >Facebook</a
                                ></span
                            >
                        </li>
                    </ul>
                    <p className="c7 c9"><span className="c0"></span></p>
                    <p className="c7">
                        <span className="c0"
                        >Vous devez savoir qu&#39;il y a certaines choses pour lesquelles
                            Deepcolt n&#39;assumera aucune responsabilit&eacute;. Certaines
                            fonctions de l&#39;application n&eacute;cessitent que l&#39;application
                            dispose d&#39;une connexion Internet active. La connexion peut
                            &ecirc;tre Wi-Fi ou fournie par votre fournisseur de r&eacute;seau
                            mobile, mais Deepcolt ne peut &ecirc;tre tenu responsable du fait que
                            l&#39;application ne fonctionne pas &agrave; pleine
                            fonctionnalit&eacute; si vous n&#39;avez pas acc&egrave;s au Wi-Fi et
                            que vous ne disposez d&#39;aucune de vos donn&eacute;es.
                            indemnit&eacute; restante.</span
                        >
                    </p>
                    <p className="c7 c9"><span className="c0"></span></p>
                    <p className="c7">
                        <span className="c0"
                        >Si vous utilisez l&#39;application en dehors d&#39;une zone Wi-Fi,
                            n&#39;oubliez pas que les termes de l&#39;accord avec votre fournisseur
                            de r&eacute;seau mobile s&#39;appliqueront toujours. Par
                            cons&eacute;quent, votre op&eacute;rateur de t&eacute;l&eacute;phonie
                            mobile peut vous facturer le co&ucirc;t des donn&eacute;es pour la
                            dur&eacute;e de la connexion lors de l&#39;acc&egrave;s &agrave;
                            l&#39;application, ou d&#39;autres frais tiers. En utilisant
                            l&#39;application, vous acceptez la responsabilit&eacute; de ces frais,
                            y compris les frais de donn&eacute;es en itin&eacute;rance si vous
                            utilisez l&#39;application en dehors de votre territoire d&#39;origine
                            (c&#39;est-&agrave;-dire votre r&eacute;gion ou votre pays) sans
                            d&eacute;sactiver l&#39;itin&eacute;rance des donn&eacute;es. Si vous
                            n&#39;&ecirc;tes pas le payeur de la facture de l&#39;appareil sur
                            lequel vous utilisez l&#39;application, sachez que nous supposons que
                            vous avez re&ccedil;u l&#39;autorisation du paiement de la facture pour
                            utiliser l&#39;application.</span
                        >
                    </p>
                    <p className="c7 c9"><span className="c0"></span></p>
                    <p className="c7">
                        <span className="c0"
                        >Dans le m&ecirc;me ordre d&#39;id&eacute;es, Deepcolt ne peut pas
                            toujours assumer la responsabilit&eacute; de la mani&egrave;re dont vous
                            utilisez l&#39;application, c&#39;est-&agrave;-dire que vous devez vous
                            assurer que votre appareil reste charg&eacute; - s&#39;il est &agrave;
                            court de batterie et que vous ne pouvez pas l&#39;allumer pour
                            b&eacute;n&eacute;ficier du service, Deepcolt ne peut pas accepter la
                            responsabilit&eacute;.</span
                        >
                    </p>
                    <p className="c7 c9"><span className="c0"></span></p>
                    <p className="c7">
                        <span className="c0"
                        >En ce qui concerne la responsabilit&eacute; de Deepcolt quant &agrave;
                            votre utilisation de l&#39;application, lorsque vous utilisez
                            l&#39;application, il est important de garder &agrave; l&#39;esprit que
                            m&ecirc;me si nous nous effor&ccedil;ons de nous assurer qu&#39;elle est
                            mise &agrave; jour et correcte &agrave; tout moment, nous comptons sur
                            des tiers pour fournir informations &agrave; nous afin que nous
                            puissions les mettre &agrave; votre disposition. Deepcolt n&#39;accepte
                            aucune responsabilit&eacute; pour toute perte, directe ou indirecte, que
                            vous subissez en vous fiant enti&egrave;rement &agrave; cette
                            fonctionnalit&eacute; de l&#39;application.</span
                        >
                    </p>
                    <p className="c7 c9"><span className="c0"></span></p>
                    <p className="c7">
                        <span className="c0"
                        >&Agrave; un moment donn&eacute;, nous souhaiterions peut-&ecirc;tre
                            mettre &agrave; jour l&#39;application. L&#39;application est
                            actuellement disponible sur Android et iOS - les exigences pour les deux
                            syst&egrave;mes (et pour tous les syst&egrave;mes suppl&eacute;mentaires
                            auxquels nous d&eacute;cidons d&#39;&eacute;tendre la
                            disponibilit&eacute; de l&#39;application) peuvent changer, et vous
                            devrez t&eacute;l&eacute;charger les mises &agrave; jour si vous
                            souhaitez conserver en utilisant l&#39;application. Deepcolt ne promet
                            pas de toujours mettre &agrave; jour l&#39;application afin qu&#39;elle
                            soit pertinente pour vous et/ou fonctionne avec la version Android et
                            iOS que vous avez install&eacute;e sur votre appareil. Cependant, vous
                            vous engagez &agrave; toujours accepter les mises &agrave; jour de
                            l&#39;application lorsqu&#39;elles vous sont propos&eacute;es. Nous
                            pouvons &eacute;galement souhaiter cesser de fournir l&#39;application
                            et mettre fin &agrave; son utilisation &agrave; tout moment sans
                            pr&eacute;avis de r&eacute;siliation. Sauf indication contraire de notre
                            part, en cas de r&eacute;siliation, (a) les droits et licences qui vous
                            sont accord&eacute;s dans les pr&eacute;sentes conditions prendront fin
                            ; (b) vous devez cesser d&#39;utiliser l&#39;application et (si
                            n&eacute;cessaire) la supprimer de votre appareil.</span
                        >
                    </p>
                    <p className="c7 c9"><span className="c0"></span></p>
                    <p className="c7">
                        <span className="c8">Modifications de ces termes et conditions</span>
                    </p>
                    <p className="c7 c9"><span className="c0"></span></p>
                    <p className="c7">
                        <span className="c0"
                        >Nous pouvons mettre &agrave; jour nos Termes et Conditions de temps
                            &agrave; autre. Ainsi, il vous est conseill&eacute; de consulter cette
                            page p&eacute;riodiquement pour tout changement. Nous vous informerons
                            de tout changement en publiant les nouvelles conditions
                            g&eacute;n&eacute;rales sur cette page.</span
                        >
                    </p>
                    <p className="c7 c9"><span className="c0"></span></p>
                    <p className="c7">
                        <span className="c0"
                        >Ces termes et conditions sont en vigueur &agrave; compter du
                            2022-07-25</span
                        >
                    </p>
                    <p className="c7 c9"><span className="c0"></span></p>
                    <p className="c7"><span className="c0">Nous contacter</span></p>
                    <p className="c7 c9"><span className="c0"></span></p>
                    <p className="c7">
                        <span className="c10"
                        >Si vous avez des questions ou des suggestions concernant nos conditions
                            g&eacute;n&eacute;rales, n&#39;h&eacute;sitez pas &agrave; nous
                            contacter &agrave; </span
                        ><span className="c11"
                        ><a className="c2" href="mailto:contact@deepcolt.com"
                        >contact@deepcolt.com</a
                            ></span
                        ><span className="c0">.</span>
                    </p>
                    <p className="c7 c9"><span className="c0"></span></p>
                </Content>
            </MainContainer>
        </Container>
    );
}

export default Terms;