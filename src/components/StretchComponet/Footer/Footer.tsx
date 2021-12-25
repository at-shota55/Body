import "./footer.scss";
import { 
    TiSocialTwitter, 
    TiSocialInstagram, 
    TiSocialFacebook,
    TiSocialGithub,
} from "react-icons/ti";

function Footer() {
    const msg = "〒100-0005 東京都千代田区丸の内１丁目\nTEL : 123-456-9999　/　FAX : 123-456-0000"
    return (
        <div id="footer">
            <section className="primary">
                <div className="flex">
                    <div className="left">
                        <p className="logo"><a href="#">企業名</a></p>
                        <p className="address">
                            {msg}
                        </p>
                        <ul className="sns-navi">
                            <li><a href="#"><TiSocialTwitter /></a></li>
                            <li><a href="#"><TiSocialInstagram /></a></li>
                            <li><a href="#"><TiSocialFacebook /></a></li>
                            <li><a href="https://github.com/" target="_blank"><TiSocialGithub /></a></li>
                        </ul>
                    </div>
                    <div className="right">
                        <div className="navi-section">
                            <p className="parent"><a href="#">商品</a></p>
                            <ul className="navi">
                                <li><a href="#">商品A</a></li>
                                <li><a href="#">商品B</a></li>
                                <li><a href="#">商品C</a></li>
                                <li><a href="#">商品D</a></li>
                            </ul>
                        </div>
                        <div className="navi-section">
                            <p className="parent"><a href="#">企業情報</a></p>
                            <ul className="navi">
                                <li><a href="#">会社案内</a></li>
                                <li><a href="#">ニュースリリース</a></li>
                                <li><a href="#">IR</a></li>
                                <li><a href="#">CSR</a></li>
                                <li><a href="#">採用情報</a></li>
                            </ul>
                        </div>
                        <div className="navi-section">
                            <p className="parent"><a href="#">キャンペーン情報</a></p>
                            <p className="parent"><a href="#">CMギャラリー</a></p>
                            <p className="parent"><a href="#">お問い合わせ</a></p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="secondary">
                <ul className="sitenavi">
                    <li><a href="#">サイトマップ</a></li>
                    <li><a href="#">プライバシーポリシー</a></li>
                </ul>
                <p className="copyright">Copyright WEBSITE,Inc. All rights reserved.</p>
            </section>
        </div>
    )
}

export default Footer