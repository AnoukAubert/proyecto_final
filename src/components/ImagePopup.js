export default function Popup ({ open, close, selectedCard }) {
    return (
        <>
        <section className={`zoom ${open ? 'zoom__open' : ''}`}>
          <button
            onClick={close}
            className="zoom__close-btn zoom__close-btn-zoom"
          ></button>
          <img
            className="zoom__image"
            src={selectedCard.link}
            alt={selectedCard.name}
          />
          <h3 className="zoom__image-title">{selectedCard.name}</h3>
        </section>
        </>
    )
}