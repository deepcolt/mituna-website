import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../styles/terms.css";
import logoDeepColt from "../assets/images/logo_deepcolt_dark.png";
import logo from "../assets/images/icon.png";

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


const Policy = () => {

    useEffect(() => {
        document.title = "Politique de confidentialité";
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
                <Title>Politique de confidentialité.</Title>
                <Content>

                    <p className="c3">
                        <span>DeepColt</span
                        ><span className="c0"
                        >&nbsp;a cr&eacute;&eacute; l&#39;application Bongola Chat en tant
                            qu&#39;application financ&eacute;e par la publicit&eacute;. Ce service
                            est fourni gratuitement par Deepcolt et est destin&eacute; &agrave;
                            &ecirc;tre utilis&eacute; tel quel.</span
                        >
                    </p>
                    <p className="c2"><span className="c0"></span></p>
                    <p className="c3">
                        <span className="c0"
                        >Cette page est utilis&eacute;e pour informer les visiteurs de nos
                            politiques en mati&egrave;re de collecte, d&#39;utilisation et de
                            divulgation des informations personnelles si quelqu&#39;un d&eacute;cide
                            d&#39;utiliser notre service.</span
                        >
                    </p>
                    <p className="c2"><span className="c0"></span></p>
                    <p className="c3">
                        <span className="c0"
                        >Si vous choisissez d&#39;utiliser notre service, vous acceptez la
                            collecte et l&#39;utilisation d&#39;informations en relation avec cette
                            politique. Les informations personnelles que nous collectons sont
                            utilis&eacute;es pour fournir et am&eacute;liorer le service. Nous
                            n&#39;utilisons ni ne partagerons vos informations avec qui que ce soit,
                            sauf de la mani&egrave;re d&eacute;crite dans la pr&eacute;sente
                            politique de confidentialit&eacute;.</span
                        >
                    </p>
                    <p className="c2"><span className="c0"></span></p>
                    <p className="c3">
                        <span
                        >Les termes utilis&eacute;s dans la pr&eacute;sente politique de
                            confidentialit&eacute; ont la m&ecirc;me signification que dans nos
                            conditions g&eacute;n&eacute;rales, qui sont accessibles sur </span
                        ><span className="c1"
                        ><a
                            className="c7"
                            href="https://www.google.com/url?q=http://bongolachat.deepcolt.com/termsofuse&amp;sa=D&amp;source=editors&amp;ust=1658916798118528&amp;usg=AOvVaw2SMAjoCmh1cROIrjjm1z31"
                        >Conditions d&rsquo;utilisations de Bongola Chat</a
                            ></span
                        ><span className="c0"
                        >, sauf indication contraire dans la pr&eacute;sente politique de
                            confidentialit&eacute;.</span
                        >
                    </p>
                    <p className="c2"><span className="c0"></span></p>
                    <p className="c3">
                        <span className="c8">Collecte et utilisation des informations</span>
                    </p>
                    <p className="c2"><span className="c0"></span></p>
                    <p className="c3">
                        <span className="c0"
                        >Pour une meilleure exp&eacute;rience, lors de l&#39;utilisation de
                            notre service, nous pouvons vous demander de nous fournir certaines
                            informations personnellement identifiables. Les informations que nous
                            demandons seront conserv&eacute;es par nous et utilis&eacute;es comme
                            d&eacute;crites dans cette politique de confidentialit&eacute;.</span
                        >
                    </p>
                    <p className="c2"><span className="c0"></span></p>
                    <p className="c3">
                        <span className="c0"
                        >L&#39;application utilise des services tiers qui peuvent collecter des
                            informations utilis&eacute;es pour vous identifier.</span
                        >
                    </p>
                    <p className="c2"><span className="c0"></span></p>
                    <p className="c3">
                        <span className="c0"
                        >Lien vers la politique de confidentialit&eacute; des fournisseurs de
                            services tiers utilis&eacute;s par l&#39;application</span
                        >
                    </p>
                    <p className="c2"><span className="c0"></span></p>
                    <ul className="c4 lst-kix_55x3kr9kekvx-0 start">
                        <li className="c3 c5 li-bullet-0">
                            <span className="c1"
                            ><a
                                className="c7"
                                href="https://www.google.com/url?q=https://policies.google.com/privacy&amp;sa=D&amp;source=editors&amp;ust=1658916798120530&amp;usg=AOvVaw0t2hc7_rZlo9agwI0cVMeQ"
                            >Services Google Play</a
                                ></span
                            >
                        </li>
                        <li className="c3 c5 li-bullet-0">
                            <span className="c1"
                            ><a
                                className="c7"
                                href="https://www.google.com/url?q=https://support.google.com/admob/answer/6128543?hl%3Den&amp;sa=D&amp;source=editors&amp;ust=1658916798121138&amp;usg=AOvVaw32sLm_ZMQsxkArS03muxGu"
                            >AdMob</a
                                ></span
                            >
                        </li>
                        <li className="c3 c5 li-bullet-0">
                            <span className="c1"
                            ><a
                                className="c7"
                                href="https://www.google.com/url?q=https://firebase.google.com/policies/analytics&amp;sa=D&amp;source=editors&amp;ust=1658916798121567&amp;usg=AOvVaw2yNjnWrbQywYh14j-EiKMt"
                            >Google Analytics pour Firebase</a
                                ></span
                            >
                        </li>
                        <li className="c3 c5 li-bullet-0">
                            <span className="c1"
                            ><a
                                className="c7"
                                href="https://www.google.com/url?q=https://firebase.google.com/support/privacy/&amp;sa=D&amp;source=editors&amp;ust=1658916798122005&amp;usg=AOvVaw2yHOd2tr0L8Bn9c0OHTZQ6"
                            >Firebase Crashlytics</a
                                ></span
                            >
                        </li>
                        <li className="c3 c5 li-bullet-0">
                            <span className="c1"
                            ><a
                                className="c7"
                                href="https://www.google.com/url?q=https://www.facebook.com/about/privacy/update/printable&amp;sa=D&amp;source=editors&amp;ust=1658916798122406&amp;usg=AOvVaw3u2I-jlJYLyHqVLxjUC6dG"
                            >Facebook</a
                                ></span
                            >
                        </li>
                        <li className="c3 c5 li-bullet-0">
                            <span className="c1"
                            ><a
                                className="c7"
                                href="https://www.google.com/url?q=https://www.apple.com/legal/privacy/&amp;sa=D&amp;source=editors&amp;ust=1658916798122790&amp;usg=AOvVaw1ajn_bLCIA85VUVGQM8DqU"
                            >Apple</a
                                ></span
                            >
                        </li>
                    </ul>
                    <p className="c2"><span className="c0"></span></p>
                    <p className="c3">
                        <span className="c8">Combien de temps Discord conserve vos informations</span>
                    </p>
                    <p className="c2"><span className="c8"></span></p>
                    <p className="c3">
                        <span className="c0"
                        >Nous conservons les informations personnelles aussi longtemps
                            qu&#39;elles sont n&eacute;cessaires aux fins pour lesquelles nous les
                            avons collect&eacute;es. En g&eacute;n&eacute;ral, cela signifie que
                            nous gardons vos donn&eacute;es personnelles aussi longtemps que vous
                            avez un compte Bongola chat actif. Certaines informations peuvent
                            &ecirc;tre supprim&eacute;es directement depuis les services. Nous
                            pouvons aussi conserver des informations pendant une certaine
                            p&eacute;riode de temps &agrave; des fins sp&eacute;cifiques. Vous
                            pouvez emp&ecirc;cher Bongola Chat de recueillir certains types de
                            donn&eacute;es utilis&eacute;es &agrave; des fins
                            sp&eacute;cifiques.</span
                        >
                    </p>
                    <p className="c2"><span className="c0"></span></p>
                    <p className="c3">
                        <span className="c0"
                        >Vous pouvez modifier ou supprimer le contenu que vous postez sur
                            Bongola Chat. Par exemple :</span
                        >
                    </p>
                    <p className="c2"><span className="c0"></span></p>
                    <ul className="c4 lst-kix_eecpzl1bw2ba-0 start">
                        <li className="c3 c9 li-bullet-0">
                            <span className="c0"
                            >Vous pouvez modifier ou supprimer tout message que vous avez
                                envoy&eacute; et tout contenu que vous avez post&eacute; si vous avez
                                toujours acc&egrave;s &agrave; l&rsquo;endroit o&ugrave; vous
                                l&#39;avez post&eacute;.</span
                            >
                        </li>
                        <li className="c3 c9 li-bullet-0">
                            <span className="c0"
                            >Vous pouvez modifier ou supprimer un groupe sur Bongola Chat si vous
                                disposez des permissions n&eacute;cessaires pour le faire.</span
                            >
                        </li>
                        <li className="c3 c9 li-bullet-0">
                            <span className="c0"
                            >Vous pouvez modifier ou supprimer une discussion si vous disposez des
                                permissions n&eacute;cessaires pour le faire.</span
                            >
                        </li>
                    </ul>
                    <p className="c2"><span className="c0"></span></p>
                    <p className="c3">
                        <span className="c0"
                        >Une fois que vous supprimez du contenu, il ne sera plus disponible pour
                            les autres utilisateurs (quoique la suppression des
                            t&eacute;l&eacute;chargements mis en cache peut prendre un certain
                            temps). Le contenu supprim&eacute; sera &eacute;galement supprim&eacute;
                            des syst&egrave;mes de Bongola Chat, mais nous pouvons conserver le
                            contenu plus longtemps si nous avons l&#39;obligation l&eacute;gale de
                            le pr&eacute;server comme d&eacute;crit ci-dessous. Les messages publics
                            peuvent aussi &ecirc;tre conserv&eacute;s entre 90 jours et deux ans
                            pour &ecirc;tre utilis&eacute;s par Bongola Chat comme (par exemple,
                            pour nous aider &agrave; entra&icirc;ner des mod&egrave;les qui
                            d&eacute;tectent de mani&egrave;re proactive le contenu qui enfreint nos
                            politiques).</span
                        >
                    </p>
                    <p className="c2"><span className="c0"></span></p>
                    <p className="c3">
                        <span className="c0"
                        >Lorsque vous supprimez votre compte, nous commen&ccedil;ons le
                            processus de suppression des informations d&#39;identification
                            personnelle et l&#39;anonymisation ou le regroupement d&#39;autres
                            donn&eacute;es. Nous pouvons conserver les informations
                            regroup&eacute;es et anonymis&eacute;es, c&#39;est-&agrave;-dire les
                            informations qui ne nous permettent plus de vous identifier et ne sont
                            plus li&eacute;es &agrave; vous en tant qu&#39;individu.</span
                        >
                    </p>
                    <p className="c2"><span className="c0"></span></p>
                    <p className="c3"><span className="c8">Donn&eacute;es de journal</span></p>
                    <p className="c2"><span className="c0"></span></p>
                    <p className="c3">
                        <span className="c0"
                        >Nous souhaitons vous informer que chaque fois que vous utilisez notre
                            service, en cas d&#39;erreur dans l&#39;application, nous collectons des
                            donn&eacute;es et des informations (via des produits tiers) sur votre
                            t&eacute;l&eacute;phone, appel&eacute;es donn&eacute;es de journal. Ces
                            donn&eacute;es de journal peuvent inclure des informations telles que
                            l&#39;adresse de protocole Internet (&quot;IP&quot;) de votre appareil,
                            le nom de l&#39;appareil, la version du syst&egrave;me
                            d&#39;exploitation, la configuration de l&#39;application lors de
                            l&#39;utilisation de notre service, l&#39;heure et la date de votre
                            utilisation du service et d&#39;autres statistiques. .</span
                        >
                    </p>
                    <p className="c2"><span className="c0"></span></p>
                    <p className="c3"><span className="c8">Cookie</span></p>
                    <p className="c2"><span className="c0"></span></p>
                    <p className="c3">
                        <span className="c0"
                        >Les cookies sont des fichiers contenant une petite quantit&eacute; de
                            donn&eacute;es qui sont couramment utilis&eacute;s comme identifiants
                            uniques anonymes. Ceux-ci sont envoy&eacute;s &agrave; votre navigateur
                            &agrave; partir des sites Web que vous visitez et sont stock&eacute;s
                            dans la m&eacute;moire interne de votre appareil.</span
                        >
                    </p>
                    <p className="c2"><span className="c0"></span></p>
                    <p className="c3">
                        <span className="c0"
                        >Ce service n&#39;utilise pas explicitement ces &laquo; cookies &raquo;.
                            Cependant, l&#39;application peut utiliser du code tiers et des
                            biblioth&egrave;ques qui utilisent des &quot;cookies&quot; pour
                            collecter des informations et am&eacute;liorer leurs services. Vous avez
                            la possibilit&eacute; d&#39;accepter ou de refuser ces cookies et de
                            savoir quand un cookie est envoy&eacute; sur votre appareil. Si vous
                            choisissez de refuser nos cookies, vous ne pourrez peut-&ecirc;tre pas
                            utiliser certaines parties de ce service.</span
                        >
                    </p>
                    <p className="c2"><span className="c0"></span></p>
                    <p className="c3"><span className="c8">Les fournisseurs de services</span></p>
                    <p className="c2"><span className="c0"></span></p>
                    <p className="c3">
                        <span className="c0"
                        >Nous pouvons faire appel &agrave; des soci&eacute;t&eacute;s tierces et
                            &agrave; des particuliers pour les raisons suivantes :</span
                        >
                    </p>
                    <p className="c2"><span className="c0"></span></p>
                    <ul className="c4 lst-kix_na2l3hlhiida-0 start">
                        <li className="c3 c5 li-bullet-0">
                            <span className="c0">Pour faciliter notre service ;</span>
                        </li>
                        <li className="c3 c5 li-bullet-0">
                            <span className="c0">Pour fournir le service en notre nom ;</span>
                        </li>
                        <li className="c3 c5 li-bullet-0">
                            <span className="c0"
                            >Pour effectuer des services li&eacute;s au Service ; ou</span
                            >
                        </li>
                        <li className="c3 c5 li-bullet-0">
                            <span className="c0"
                            >Pour nous aider &agrave; analyser comment notre Service est
                                utilis&eacute;.</span
                            >
                        </li>
                    </ul>
                    <p className="c2 c10"><span className="c0"></span></p>
                    <p className="c3">
                        <span className="c0"
                        >Nous souhaitons informer les utilisateurs de ce service que ces tiers
                            ont acc&egrave;s &agrave; leurs informations personnelles. La raison est
                            d&#39;accomplir les t&acirc;ches qui leur sont confi&eacute;es en notre
                            nom. Cependant, ils sont tenus de ne pas divulguer ou utiliser les
                            informations &agrave; d&#39;autres fins.</span
                        >
                    </p>
                    <p className="c2"><span className="c0"></span></p>
                    <p className="c3"><span className="c8">S&eacute;curit&eacute;</span></p>
                    <p className="c2"><span className="c0"></span></p>
                    <p className="c3">
                        <span className="c0"
                        >Nous appr&eacute;cions votre confiance en fournissant vos informations
                            personnelles, nous nous effor&ccedil;ons donc d&#39;utiliser des moyens
                            commercialement acceptables pour les prot&eacute;ger. Mais n&#39;oubliez
                            pas qu&#39;aucune m&eacute;thode de transmission sur Internet ou
                            m&eacute;thode de stockage &eacute;lectronique n&#39;est s&ucirc;re et
                            fiable &agrave; 100 %, et nous ne pouvons garantir sa
                            s&eacute;curit&eacute; absolue.</span
                        >
                    </p>
                    <p className="c2"><span className="c0"></span></p>
                    <p className="c3"><span className="c8">Liens vers d&#39;autres sites</span></p>
                    <p className="c2"><span className="c0"></span></p>
                    <p className="c3">
                        <span className="c0"
                        >Ce service peut contenir des liens vers d&#39;autres sites. Si vous
                            cliquez sur un lien tiers, vous serez dirig&eacute; vers ce site. Notez
                            que ces sites externes ne sont pas exploit&eacute;s par nous. Par
                            cons&eacute;quent, nous vous conseillons vivement de consulter la
                            politique de confidentialit&eacute; de ces sites Web. Nous n&#39;avons
                            aucun contr&ocirc;le et n&#39;assumons aucune responsabilit&eacute;
                            quant au contenu, aux politiques de confidentialit&eacute; ou aux
                            pratiques des sites ou services tiers.</span
                        >
                    </p>
                    <p className="c2"><span className="c0"></span></p>
                    <p className="c2"><span className="c0"></span></p>
                    <p className="c2"><span className="c0"></span></p>
                    <p className="c3"><span className="c8">Confidentialit&eacute; des enfants</span></p>
                    <p className="c2"><span className="c0"></span></p>
                    <p className="c3">
                        <span className="c0"
                        >Ces Services ne s&#39;adressent &agrave; personne de moins de 13 ans.
                            Nous ne collectons pas sciemment d&#39;informations personnellement
                            identifiables aupr&egrave;s d&#39;enfants de moins de 13 ans. Dans le
                            cas o&ugrave; nous d&eacute;couvrons qu&#39;un enfant de moins de 13 ans
                            nous a fourni des informations personnelles, nous les supprimons
                            imm&eacute;diatement de nos serveurs. Si vous &ecirc;tes parent ou
                            tuteur et que vous savez que votre enfant nous a fourni des informations
                            personnelles, veuillez nous contacter afin que nous puissions faire les
                            actions n&eacute;cessaires.</span
                        >
                    </p>
                    <p className="c2"><span className="c0"></span></p>
                    <p className="c3">
                        <span className="c8"
                        >Traiter les comportements nuisibles hors plateforme</span
                        >
                    </p>
                    <p className="c2"><span className="c8"></span></p>
                    <p className="c3">
                        <span className="c0"
                        >Bongola Chat est un endroit o&ugrave; on vient pour passer du temps
                            avec ses amis, trouver son appartenance et cr&eacute;er des
                            communaut&eacute;s. Certains types de comportements hors plate-forme
                            peuvent raisonnablement cr&eacute;er un risque pour la
                            s&eacute;curit&eacute;, - voire m&ecirc;me et de fa&ccedil;on
                            imm&eacute;diate, un pr&eacute;judice grave - pour les personnes qui
                            utilisent Bongola Chat. Lorsque nous parlons de comportements hors
                            plateforme, nous faisons r&eacute;f&eacute;rence &agrave; tout
                            comportement se d&eacute;roulant en dehors de Discord, soit dans
                            d&#39;autres espaces num&eacute;riques, soit dans une communaut&eacute;
                            physique. Si jamais nous prenons connaissance de comportements
                            sp&eacute;cifiques hors plate-forme qui sont particuli&egrave;rement
                            tr&egrave;s pr&eacute;judiciables et que ces faits sont
                            accompagn&eacute;s de preuves tangibles d&eacute;montrant qu&rsquo;une
                            personne disposant d&#39;un compte Discord en est l&rsquo;auteur(e),
                            alors nous prendrons en consid&eacute;ration le comportement
                            pr&eacute;judiciable hors plate-forme pour &eacute;valuer si ce compte a
                            enfreint une directive communautaire sp&eacute;cifique. Ceci pourra
                            conduire &agrave; une suppression de compte imm&eacute;diate si
                            l&rsquo;auteur est jug&eacute; coupable par notre &eacute;quipe
                            d&#39;&Eacute;thique.</span
                        >
                    </p>
                    <p className="c2"><span className="c0"></span></p>
                    <p className="c2"><span className="c0"></span></p>
                    <p className="c3">
                        <span className="c8"
                        >Modifications de cette politique de confidentialit&eacute;</span
                        >
                    </p>
                    <p className="c2"><span className="c0"></span></p>
                    <p className="c3">
                        <span className="c0"
                        >Nous pouvons mettre &agrave; jour notre politique de
                            confidentialit&eacute; de temps &agrave; autre. Ainsi, il vous est
                            conseill&eacute; de consulter cette page p&eacute;riodiquement pour tout
                            changement. Nous vous informerons de tout changement en publiant la
                            nouvelle politique de confidentialit&eacute; sur cette page.</span
                        >
                    </p>
                    <p className="c2"><span className="c0"></span></p>
                    <p className="c3">
                        <span className="c0"
                        >Cette politique est effective &agrave; partir du 2022-07-25</span
                        >
                    </p>
                    <p className="c2"><span className="c0"></span></p>
                    <p className="c3"><span className="c0">Nous contacter</span></p>
                    <p className="c2"><span className="c0"></span></p>
                    <p className="c3">
                        <span
                        >Si vous avez des questions ou des suggestions concernant notre
                            politique de confidentialit&eacute;, n&#39;h&eacute;sitez pas &agrave;
                            nous contacter &agrave; </span
                        ><span className="c1"
                        ><a className="c7" href="mailto:contact@deepcolt.com"
                        >contact@deepcolt.com</a
                            ></span
                        ><span className="c0">.</span>
                    </p>

                </Content>
            </MainContainer>
        </Container>
    );
}

export default Policy;