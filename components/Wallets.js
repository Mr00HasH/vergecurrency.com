const walletsLocale = require('../locales/index').en.wallets.wallets;

function Wallets() {
  const wallets = walletsLocale.map(x => (
    <div
      className={`col-xs-12 col-sm-6 col-md-4 wallets--item start-xs ${x.available ? '' : 'wallets--item__disabled'}`}
      key={x.name}
    >
      <a href={x.url}>
        <div className={`wallets--icon ${x.classNames}`} />
        <div className="wallets--text">
          <h4>{x.name}</h4>
          <span>{x.available ? 'Download here' : 'Available soon!'}</span>
        </div>
      </a>
    </div>
  ));

  return (
    <div className="row center-xs start-sm">
      {wallets}
    </div>
  );
}

export default Wallets;
