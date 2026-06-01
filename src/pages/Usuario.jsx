import "../styles/Usuario.scss";

function Usuario() {
  return (
    <main className="usuario-page">
      <section className="usuario-shell" aria-label="Panel de usuario TicketFlow">

        <aside className="usuario-sidebar" aria-label="Menú lateral de usuario">
          <header className="perfil-usuario">
            <div className="avatar" aria-hidden="true">👤</div>

            <div>
              <h1>USUARIO</h1>
              <p>Perfil y cuenta</p>
            </div>
          </header>

          <nav className="menu-usuario" aria-label="Opciones del usuario">
            <a href="#consulta" className="menu-card">
              <span aria-hidden="true">💬</span>
              <div>
                <strong>Tipo de consulta</strong>
                <p>Categorías y temas</p>
              </div>
            </a>

            <a href="#datos" className="menu-card">
              <span aria-hidden="true">📄</span>
              <div>
                <strong>Datos</strong>
                <p>Información personal</p>
              </div>
            </a>

            <a href="#archivos" className="menu-card">
              <span aria-hidden="true">📁</span>
              <div>
                <strong>Archivos</strong>
                <p>Documentos adjuntos</p>
              </div>
            </a>

            <a href="#estado" className="menu-card">
              <span aria-hidden="true">🛡️</span>
              <div>
                <strong>Estado</strong>
                <p>Seguimiento y tickets</p>
              </div>
            </a>
          </nav>
        </aside>

        <section className="usuario-content">
          <div className="contenido-grid">

            <section className="ticket-card" aria-labelledby="nuevo-ticket">
              <header className="card-header">
                <div className="header-icon" aria-hidden="true">📝</div>

                <div>
                  <h2 id="nuevo-ticket">Nuevo ticket</h2>
                  <p>Completa el formulario para crear tu solicitud.</p>
                </div>
              </header>

              <form className="ticket-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                      type="text" 
                      id="nombre" 
                      placeholder="Ingresa tu nombre completo" 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="tipo">Tipo de falla</label>
                    <select id="tipo">
                      <option>Selecciona el tipo de falla</option>
                      <option>Iluminación</option>
                      <option>Electricidad</option>
                      <option>Climatización</option>
                      <option>Puerta</option>
                      <option>Escalera mecánica</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="zona">Zona</label>
                  <select id="zona">
                    <option>Selecciona la zona o área</option>
                    <option>Entrada</option>
                    <option>Cajas</option>
                    <option>Pasillo</option>
                    <option>Bodega</option>
                    <option>Baños</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="descripcion">Descripción del problema</label>
                  <textarea 
                    id="descripcion" 
                    rows="4"
                    placeholder="Describe detalladamente el problema que estás experimentando..."
                  ></textarea>
                </div>

                <div className="form-group" id="archivos">
                  <label htmlFor="archivo">Adjuntar archivo <span>(opcional)</span></label>

                  <div className="file-box">
                    <input type="file" id="archivo" />
                    <p>📎 Arrastra o selecciona una imagen del problema</p>
                    <small>Formatos permitidos: PDF, JPG, PNG, DOCX. Máx. 10MB</small>
                  </div>
                </div>

                <div className="form-actions">
                  <button type="reset" className="btn-limpiar">
                    ↻ Limpiar
                  </button>

                  <button type="submit" className="btn-crear">
                    ✈ Crear ticket
                  </button>
                </div>
              </form>
            </section>

            <section className="comunicaciones-card" aria-labelledby="registro-comunicaciones">
              <header className="card-header">
                <div className="header-icon" aria-hidden="true">💬</div>

                <div>
                  <h2 id="registro-comunicaciones">Registro de comunicaciones</h2>
                  <p>Historial de actualizaciones y respuestas.</p>
                </div>
              </header>

              <article className="mensaje">
                <div className="mensaje-top">
                  <div className="mensaje-avatar soporte" aria-hidden="true">S</div>

                  <div>
                    <h3>Soporte Técnico</h3>
                    <span>Respuesta</span>
                  </div>

                  <time dateTime="2024-05-23T10:30">23/05/2024 10:30</time>
                </div>

                <p>
                  Hemos recibido tu solicitud y nuestro equipo ya está revisando la información proporcionada.
                </p>

                <p>
                  Te mantendremos informado sobre los avances.
                </p>
              </article>

              <article className="mensaje">
                <div className="mensaje-top">
                  <div className="mensaje-avatar usuario" aria-hidden="true">U</div>

                  <div>
                    <h3>Usuario</h3>
                    <span className="actualizacion">Actualización</span>
                  </div>

                  <time dateTime="2024-05-23T09:15">23/05/2024 09:15</time>
                </div>

                <p>
                  Se adjunta evidencia del problema.
                </p>

                <div className="archivo-adjunto">
                  📎 captura_pantalla.png
                  <small>1.2 MB</small>
                </div>
              </article>

              <a href="#todas" className="ver-comunicaciones">
                Ver todas las comunicaciones →
              </a>
            </section>

          </div>

          <section className="estado-ticket" id="estado" aria-label="Estado actual del ticket">
            <article>
              <h3>Estado actual del ticket</h3>
              <span className="estado pendiente">🕒 Pendiente</span>
            </article>

            <article>
              <h3>Creado el</h3>
              <p>23/05/2024 09:12</p>
            </article>

            <article>
              <h3>Última actualización</h3>
              <p>23/05/2024 10:30</p>
            </article>

            <article>
              <h3>ID del ticket</h3>
              <p className="ticket-id">#TK-2024-00125</p>
            </article>

            <button type="button" className="btn-detalle">
              👁 Ver detalles
            </button>
          </section>
        </section>

      </section>
    </main>
  );
}

export default Usuario;