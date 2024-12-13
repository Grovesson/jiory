import React from "react";

const Board = () => {
  return (
    <>
      <h2 className="pt-6 text-3xl font-title text-center bg-jio-background dark:bg-jio-text text-jio-text dark:text-jio-background">
        Hallitus
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 uw:grid-cols-12 gap-6 p-6 bg-jio-background dark:bg-jio-text text-jio-text dark:text-jio-background">
        <div className="flex flex-col">
          <img src="assets/board/Tiia-scaled.webp" alt="Puheenjohtaja" />
          <div className="py-3">
            <h3 className="font-title text-xl py-1">Tiia Koivisto</h3>
            <p>Puheenjohtaja</p>
            <a className="opacity-50 text-xs" href="mailto:pj@jio.fi">
              pj[at]jio.fi
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <img src="assets/board/Snek-scaled.webp" alt="Varapuheenjohtaja" />
          <div className="py-3">
            <h3 className="font-title text-xl py-1">Sini Salomäki</h3>
            <p>Varapuheenjohtaja</p>
            <a className="opacity-50 text-xs" href="mailto:pj@jio.fi">
              vpj[at]jio.fi
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <img src="assets/board/Veera-scaled.webp" alt="Puheenjohtaja" />
          <div className="py-3">
            <h3 className="font-title text-xl py-1">
              Veera Korkeamäki-reunanen
            </h3>
            <p>Sihteeri</p>
            <a className="opacity-50 text-xs" href="mailto:sihteeri@jio.fi">
              sihteeri[at]jio.fi
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <img src="assets/board/Laura-scaled.webp" alt="Puheenjohtaja" />
          <div className="py-3">
            <h3 className="font-title text-xl py-1">Laura Akselin</h3>
            <p>Rahastonhoitaja</p>
            <a
              className="opacity-50 text-xs"
              href="mailto:rahastonhoitaja@jio.fi"
            >
              rahastonhoitaja[at]jio.fi
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <img src="assets/board/Buli-scaled.webp" alt="Puheenjohtaja" />
          <div className="py-3">
            <h3 className="font-title text-xl py-1">Joonatan Stenman</h3>
            <p>Koulutuspoliittinen vastaava</p>
            <a className="opacity-50 text-xs" href="mailto:kopo@jio.fi">
              kopo[at]jio.fi
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <img src="assets/board/Miro-scaled.webp" alt="Puheenjohtaja" />
          <div className="py-3">
            <h3 className="font-title text-xl py-1">Miro Lehto</h3>
            <p>Huvi -ja kulttuurivastaava</p>
            <a
              className="opacity-50 text-xs"
              href="mailto:tapahtumavastaavat@jio.fi"
            >
              tapahtumavastaavat[at]jio.fi
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <img src="assets/board/Silja-scaled.webp" alt="Puheenjohtaja" />
          <div className="py-3">
            <h3 className="font-title text-xl py-1">Silja Lamminen</h3>
            <p>Huvi -ja kulttuurivastaava</p>
            <a
              className="opacity-50 text-xs"
              href="mailto:tapahtumavastaavat@jio.fi"
            >
              tapahtumavastaavat[at]jio.fi
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <img src="assets/board/Venla-scaled.webp" alt="Puheenjohtaja" />
          <div className="py-3">
            <h3 className="font-title text-xl py-1">Venla Joro</h3>
            <p>Huvi -ja kulttuurivastaava</p>
            <a
              className="opacity-50 text-xs"
              href="mailto:tapahtumavastaavat@jio.fi"
            >
              tapahtumavastaavat[at]jio.fi
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <img src="assets/board/Enni2-scaled.webp" alt="Puheenjohtaja" />
          <div className="py-3">
            <h3 className="font-title text-xl py-1">Enni Pitkänen</h3>
            <p>Yritys- ja sidosryhmävastaava, KEHÄ-vastaava</p>
            <a className="opacity-50 text-xs" href="mailto:yhteistyo@jio.fi">
              yhteistyo[at]jio.fi
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <img src="assets/board/Kouvola-scaled.webp" alt="Puheenjohtaja" />
          <div className="py-3">
            <h3 className="font-title text-xl py-1">Juho Kuivila</h3>
            <p>Dynamon Tuutorvastaava</p>
            <a className="opacity-50 text-xs" href="mailto:tutor@jio.fi">
              tutor[at]jio.fi
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <img src="assets/board/Oona-scaled.webp" alt="Puheenjohtaja" />
          <div className="py-3">
            <h3 className="font-title text-xl py-1">Oona Ehrsten</h3>
            <p>Rajakadun Tuutorvastaava</p>
            <a className="opacity-50 text-xs" href="mailto:tutor@jio.fi">
              tutor[at]jio.fi
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <img src="assets/board/Vilma-scaled.webp" alt="Puheenjohtaja" />
          <div className="py-3">
            <h3 className="font-title text-xl py-1">Vilma Villanen</h3>
            <p>Viestintä- ja kansainvälisyysvastaava</p>
            <a className="opacity-50 text-xs" href="mailto:viestinta@jio.fi">
              viestinta[at]jio.fi
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
