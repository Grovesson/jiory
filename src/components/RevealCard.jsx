export const yearsSince1982 = () => new Date().getFullYear() - 1982;

const RevealCard = ({
  bgImg,
  title,
  description,
  mainLink,
  mainLinkURL,
  secondaryLink,
  secondaryLinkURL,
}) => {
  return (
    <div
      className={`flex flex-col bg-[url('${bgImg}')] bg-cover bg-center group`}
    >
      <div className="opacity-0 group-hover:opacity-100 group-hover:bg-black/75 drop-shadow-lg hover:drop-shadow-2xl transition ease-in-out delay-100 p-6 h-full">
        <h2 className="text-white text-lg font-title mb-3">{title}</h2>
        <p className="text-white font-text mb-3">{description}</p>
        <div className="flex content-center">
          {mainLink && (
            <a
              href={mainLinkURL}
              target="_blank"
              className="text-white bg-jio-secondary py-1.5 px-3 mr-3"
              rel="noopener noreferrer"
            >
              {mainLink}
            </a>
          )}
          {secondaryLink && (
            <a
              href={secondaryLinkURL}
              className="text-jio-accent content-center"
            >
              {secondaryLink}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default RevealCard;
