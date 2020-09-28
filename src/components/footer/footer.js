import React from 'react';
import './footer.scss';

const footer = ({linksFooter, logosFooter, discr1, discr2}) => {
	const logosImages = logosFooter.map((logoItem, i) => <img src={logoItem} alt="partner-logo" className="footer-partners-item" key={i}/>);
	const navItems = linksFooter.map((link, i) => <a href={link.href} className="footer-navigation-item" key={i}>{link.title}</a>);
	
	return (
		<section className="footer">
			<div className="container">
				<div className="footer-partners">
					{logosImages}
				</div>
				<div className="footer-wrap">
					<nav className="footer-navigation">
						{navItems}
					</nav>
					<p className="footer-made">Сайт был разработан <span className="credits">Куцерибом Андреем</span> в учебных целях, в рамках образовательной программы IT nation. Дизайн сайта создан <span className="credits">Валерией Бубырь</span>.</p>
				</div>
				<p className="footer-first">{discr1}</p>
                <p className="footer-second">{discr2}</p>
			</div>
		</section>
	);
};

export default footer;