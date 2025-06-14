const testimonios = [
  {
    nombre: "Aibileen",
    mensaje: `"Crié a 17 niños blancos. Algunos me amaban, otros me olvidaron. Pero todos aprendieron a decir 'gracias' porque yo se los enseñé. Cuando conté mi historia, me liberé del miedo que me ataba desde hacía años." \n\n🟤 Reflexión: Denunciar no me devolvió el pasado, pero sí me dio paz. Si no hablamos, nadie sabrá lo que sufrimos.`,
    cita: "No hay silencio que no merezca ser roto con dignidad."
  },
  {
    nombre: "Minny",
    mensaje: `"La señora Hilly me humilló, me despidió sin razón y me cerró puertas por todo Jackson. Contar mi historia fue un acto de justicia." \n\n🟤 Reflexión: Levantar la voz fue la única forma de recuperar mi dignidad. A veces el coraje se sirve en un pastel muy especial."`
  },
  {
    nombre: "Yule May",
    mensaje: `"Fui a prisión por tomar un anillo que nadie extrañaba. Solo quería pagar la universidad de mis hijos. Allí me di cuenta de que el silencio era parte del castigo." \n\n🟤 Reflexión: El racismo me robó tiempo con mi familia, pero contar mi verdad me devolvió fuerza y propósito. Hablar es resistencia.`
  },
  {
    nombre: "Louvenia",
    mensaje: `"Mi nieto fue golpeado por mirar a una mujer blanca. Él solo quería vender su periódico. Aún cojea, pero su mirada ya no se agacha." \n\n🟤 Reflexión: Nuestras historias deben romper el silencio que cubre esta injusticia. Cada palabra hablada es una semilla de cambio.`
  },
  {
    nombre: "Rachel",
    mensaje: `"Durante años trabajé como criada en casas donde ni siquiera podía usar el baño interior. Me decían que era por 'higiene'." \n\n🟤 Reflexión: El racismo se esconde en las reglas cotidianas. Hablarlo lo hace visible y por eso es tan poderoso denunciar.`
  },
  {
    nombre: "Esther",
    mensaje: `"Tenía que besar a los niños blancos para dormirlos, pero no me dejaban sentarme a comer en la misma mesa. Era parte del contrato no escrito." \n\n🟤 Reflexión: Exponer mi historia fue abrir una herida para que cicatrice. Callar me hacía invisible. Hablar me dio forma.`
  },
  {
    nombre: "Dorothy",
    mensaje: `"Me echaron por encontrar un pendiente que había perdido la señora. Lo devolví, pero ya había decidido que no era confiable." \n\n🟤 Reflexión: Hablar me mostró que la injusticia no es normal. El mundo cambia cuando dejamos de aguantar en silencio.`
  },
  {
    nombre: "Mae",
    mensaje: `"Mis hijos crecieron viendo cómo me trataban. Escribí mi historia para que supieran que merezco respeto, no lástima." \n\n🟤 Reflexión: Romper el ciclo empieza con una voz. La mía. El miedo no educa, pero la verdad sí."`
  },
  {
    nombre: "Carla",
    mensaje: `"La esposa de mi patrón me pedía que le planchara la ropa íntima, pero no podía mirar a los ojos a su esposo sin que se enojara." \n\n🟤 Reflexión: La hipocresía blanca me asfixiaba. Denunciar fue quitarme la mordaza impuesta por el miedo heredado.`
  },
  {
    nombre: "Lula",
    mensaje: `"Crecí escuchando que servir era nuestro destino. Pero descubrí que puedo elegir mi voz antes que mi silencio." \n\n🟤 Reflexión: Denunciar no solo me liberó a mí, sino también a mis hijas. Lo que callamos, lo perpetuamos.`
  },
  {
    nombre: "Bernice",
    mensaje: `"Mi patrona me decía ‘parte de la familia’, pero no me permitía sentarme en su sala. Me di cuenta de que el cariño no era respeto." \n\n🟤 Reflexión: Contarlo fue ponerle nombre a esa doble moral. Ya no me trago lo que me hizo daño. Lo cuento para sanar.`
  },
  {
    nombre: "Anónimo",
    mensaje: `"Nunca me llamaron por mi nombre. Siempre era ‘la muchacha’. Hasta que mi historia salió publicada, y ahí lo supieron todos." \n\n🟤 Reflexión: Ser escuchada me hizo existir. Que no me recuerden como sirvienta, sino como mujer con voz y valor.`
  },
  {
    nombre: "Tu Voz",
    mensaje: `"¿Qué te gustaría decirle al mundo sobre estas historias?" \n\n🟤 Reflexión: Todos tenemos la oportunidad de elevar nuestra voz.`,
    esFormulario: true,
  }
];

const paginacion = document.createElement("div");
paginacion.className = "paginacion";
document.querySelector(".book").after(paginacion);



let currentIndex = 0;

function mostrarPagina(index) {
  const book = document.getElementById("book");
  book.innerHTML = "";

  const pageData = testimonios[index];

  const page = document.createElement("div");
  page.className = "page active";

  const h2 = document.createElement("h2");
  h2.textContent = pageData.nombre;
  page.appendChild(h2);

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = pageData.nombre.charAt(0);
  page.insertBefore(avatar, h2);

  const p = document.createElement("p");
  const partes = pageData.mensaje.split("\n\n🟤 Reflexión:");
  p.innerHTML = `<span class="testimonio">${partes[0]}</span><br><br><span class="reflexion">🟤 Reflexión:${partes[1]}</span>`;
  page.appendChild(p);

  if (pageData.cita) {
    const cita = document.createElement("blockquote");
    cita.textContent = `"${pageData.cita}"`;
    cita.className = "cita";
    page.appendChild(cita);
  }

  const contador = document.createElement("p");
  contador.className = "contador";
  contador.textContent = `Testimonio ${index + 1} de ${testimonios.length}`;
  page.appendChild(contador);

  const paginacion = document.querySelector(".paginacion");
  paginacion.innerHTML = ""; // limpiar los puntos previos

  testimonios.forEach((_, i) => {
    const punto = document.createElement("span");
    punto.className = "punto";
    if (i === index) punto.classList.add("activo");
    punto.addEventListener("click", () => {
      paginaActual = i;
      mostrarPagina(paginaActual);
    });
    paginacion.appendChild(punto);
  });


  if (pageData.esFormulario) {
    const textarea = document.createElement("textarea");
    textarea.id = "userMessage";
    textarea.placeholder = "Escribe aquí...";
    page.appendChild(textarea);

    const sendBtn = document.createElement("button");
    sendBtn.textContent = "Enviar";
    sendBtn.onclick = enviarMensaje;
    page.appendChild(sendBtn);

    const gracias = document.createElement("div");
    gracias.id = "thankYou";
    gracias.classList.add("hidden");
    gracias.textContent = "¡Gracias por compartir tu voz!";
    page.appendChild(gracias);
  }

  book.appendChild(page);
}

function nextPage() {
  if (currentIndex < testimonios.length - 1) {
    const oldPage = document.querySelector(".page");
    oldPage.classList.remove("active");
    oldPage.classList.add("exit-left");

    currentIndex++;
    setTimeout(() => mostrarPagina(currentIndex), 500);
  }
}

function prevPage() {
  if (currentIndex > 0) {
    const oldPage = document.querySelector(".page");
    oldPage.classList.remove("active");
    oldPage.classList.add("exit-left");

    currentIndex--;
    setTimeout(() => mostrarPagina(currentIndex), 500);
  }
}

function enviarMensaje() {
  const mensaje = document.getElementById("userMessage").value.trim();
  if (mensaje) {
    document.getElementById("thankYou").classList.remove("hidden");
  }
}

// Inicializar
window.onload = () => {
  mostrarPagina(currentIndex);
};
