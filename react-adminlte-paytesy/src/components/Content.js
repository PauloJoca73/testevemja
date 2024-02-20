import React from "react";

export default function Content() {
  return (
    <div id="root">
      <div className="content-wrapper" align="center">
        {/* / Inicio Form 01 */}
        <div className="col-sm-6 col-form-label" align="left">
          <div className="card-header">
            <h3 className="card-title">Emitir Nova Referência</h3>
          </div>
          {/* /.card-header */}
          {/* form start */}
          <form className="form-horizontal">
            <div className="card-body">
              {/* Campo 1 */}
              <div className="form-group row">
                <div className="input-group mb-3">
                  <label className="col-sm-3 col-form-label">Valor</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=".00"
                    align="right"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">MT</span>
                  </div>
                </div>
                <div className="form-descricao">
                  <label className="form-descricao">Maior que 500 MT</label>
                </div>
              </div>
              {/* Campo 2 */}
              <div className="form-group row">
                <div className="input-group mb-3">
                  <label className="col-sm-3 col-form-label">Descrição</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    align="left"
                  />
                </div>
                <div className="form-descricao">
                  <label className="form-descricao">
                    Opcional. Exemplo: Número da Factura, Número Encomenda.
                  </label>
                </div>
              </div>
              {/* Campo 3 */}
              <div className="form-group row">
                <div className="input-group mb-3">
                  <label className="col-sm-3 col-form-label">Nome</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    align="left"
                  />
                </div>
                <div className="form-descricao">
                  <label className="form-descricao">Opcional.</label>
                </div>
              </div>
              {/* Campo 4 */}
              <div className="form-group row">
                <div className="input-group mb-3">
                  <label className="col-sm-3 col-form-label">E-mail</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder=""
                    align="left"
                  />
                </div>
                <div className="form-descricao">
                  <label className="form-descricao">Opcional.</label>
                </div>
              </div>
              {/* Campo 5 */}
              <div className="form-group row">
                <div className="input-group mb-3">
                  <label className="col-sm-3 col-form-label">Telemóvel</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="(+000) 000000000"
                    align="left"
                  />
                </div>
                <div className="form-descricao">
                  <label className="form-descricao"></label>
                </div>
              </div>
              {/* Campo 6 */}
              <div className="form-group row">
                <div className="input-group mb-3">
                  <label className="col-sm-3 col-form-label">Observações</label>
                  <textarea
                    class="form-control"
                    rows="3"
                    placeholder=""
                  ></textarea>
                </div>
                <div className="form-descricao">
                  <label className="form-descricao">
                    Opcional. Máximo 500 caracteres.
                  </label>
                </div>
              </div>
              {/* Fim Campo 6 */}
            </div>
            {/* /.card-body */}
            <div className="card-footer">
              <button type="submit" className="btn btn-default float-left">
                Fechar
              </button>
              <button type="submit" className="btn btn-info float-right">
                Submeter
              </button>
            </div>
            {/* /.card-footer */}
          </form>
        </div>
        {/* / Fim Form 01 */}

        {/* / Inicio Form 02 */}
        <div className="col-sm-6 col-form-label" align="left">
          <div className="card-header">
            <h3 className="card-title">Emitir Nova Referência</h3>
          </div>
          {/* /.card-header */}
          {/* form start */}
          <form className="form-horizontal">
            <div className="card-body">
              {/* Campo 0 */}
              <div className="form-group row">
                <div className="input-group mb-3">
                  <label className="col-sm-3 col-form-label">Entidade</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="12345"
                    align="left"
                  />
                </div>
                <div className="form-descricao">
                  <label className="form-descricao"></label>
                </div>
              </div>
              {/* Campo 1 */}
              <div className="form-group row">
                <div className="input-group mb-3">
                  <label className="col-sm-3 col-form-label">Valor</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=".00"
                    align="right"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">MT</span>
                  </div>
                </div>
                <div className="form-descricao">
                  <label className="form-descricao">Maior que 500 MT</label>
                </div>
              </div>
              {/* Campo 2 */}
              <div className="form-group row">
                <div className="input-group mb-3">
                  <label className="col-sm-3 col-form-label">Designação</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    align="left"
                  />
                </div>
                <div className="form-descricao">
                  <label className="form-descricao">
                    Opcional. Exemplo: Número da Factura, Número Encomenda.
                  </label>
                </div>
              </div>
              {/* Campo 3 */}
              <div className="form-group row">
                <div className="input-group mb-3">
                  <label className="col-sm-3 col-form-label">Nome</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    align="left"
                  />
                </div>
                <div className="form-descricao">
                  <label className="form-descricao">Opcional.</label>
                </div>
              </div>
              {/* Campo 4 */}
              <div className="form-group row">
                <div className="input-group mb-3">
                  <label className="col-sm-3 col-form-label">E-mail</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder=""
                    align="left"
                  />
                </div>
                <div className="form-descricao">
                  <label className="form-descricao">Opcional.</label>
                </div>
              </div>
              {/* Campo 5 */}
              <div className="form-group row">
                <div className="input-group mb-3">
                  <label className="col-sm-3 col-form-label">Telemóvel</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="(+000) 000000000"
                    align="left"
                  />
                </div>
                <div className="form-descricao">
                  <label className="form-descricao"></label>
                </div>
              </div>
              {/* Campo 6 */}
              <div classname="form-group row">
                <div classname="input-group mb-3">
                  <label classname="col-sm-3 col-form-label">Pagamento</label>
                  <input
                    data-toggle="collapse"
                    href="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    type="checkbox"
                    className="cb"
                  />

                  <div class="collapse" id="collapseExample">
                    <div className="form-group row">
                      <div classname="input-group mb-2">
                        <label>Data inicial:</label>
                        <div
                          className="input-group date"
                          id="reservationdate"
                          data-target-input="nearest"
                        >
                          <input
                            type="text"
                            className="form-control datetimepicker-input"
                            data-target="#reservationdate"
                          />
                          <div
                            className="input-group-append"
                            data-target="#reservationdate"
                            data-toggle="datetimepicker"
                          >
                            <div className="input-group-text">
                              <i className="fa fa-calendar" />
                            </div>
                          </div>
                        </div>
                        <div classname="form-descricao">
                          <label classname="form-descricao">limite.</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div classname="form-descricao">
                  <label classname="form-descricao"></label>
                </div>
              </div>

              {/* Campo 7 */}
              <div className="form-group row">
                <div className="input-group mb-3">
                  <label className="col-sm-3 col-form-label">Observações</label>
                  <textarea
                    class="form-control"
                    rows="3"
                    placeholder=""
                  ></textarea>
                </div>
                <div className="form-descricao">
                  <label className="form-descricao">
                    Opcional. Máximo 500 caracteres.
                  </label>
                </div>
              </div>
              {/* Fim Campo 6 */}
            </div>
            {/* /.card-body */}
            <div className="card-footer">
              <button type="submit" className="btn btn-default float-left">
                Fechar
              </button>
              <button type="submit" className="btn btn-info float-right">
                Submeter
              </button>
            </div>
            {/* /.card-footer */}
          </form>
        </div>
        {/* / Fim Form 02 */}
      </div>
    </div>
  );
}
