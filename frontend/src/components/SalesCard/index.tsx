import NotificationButton from '../notification-button';
import '../SalesCard/style.css'

function SalesCard() {
  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Vendas</h2>
      <div>
        <div className="dsmeta-form-control-container">
          <input className="dsmeta-form-control" type="date" name="" id="" />
        </div>
        <div className="dsmeta-form-control-container">
          <input className="dsmeta-form-control" type="date" name="" id="" />
        </div>
      </div>

      <div>
        <table className="dsmeta-sales-table">
          <thead>
            <tr>
              <th className="show992">ID</th>
              <th className="show576">Data</th>
              <th>Total</th>
              <th>Vendedor</th>
              <th className="show992">Visitas</th>
              <th className="show992">Vendas</th>
              <th>Notificar</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th className="show992">#341</th>
              <td className="show576">08/07/2022</td>
              <td>R$ 4.500,00</td>
              <td>Anakin</td>
              <th className="show992">5</th>
              <th className="show992">10</th>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>

            <tr>
              <th className="show992">#341</th>
              <td className="show576">08/07/2022</td>
              <td>R$ 4.500,00</td>
              <td>Anakin</td>
              <th className="show992">5</th>
              <th className="show992">10</th>
              <td>
                <div className="dsmeta-red-btn-container">
                <NotificationButton />
                </div>
              </td>
            </tr>

            <tr>
              <th className="show992">#341</th>
              <td className="show576">08/07/2022</td>
              <td>R$ 4.500,00</td>
              <td>Anakin</td>
              <th className="show992">5</th>
              <th className="show992">10</th>
              <td>
                <div className="dsmeta-red-btn-container">
                <NotificationButton />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalesCard;
