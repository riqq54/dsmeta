import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Sale } from "../../models/sale";
import { BASE_URL } from "../../utils/request";

import NotificationButton from '../NotificationButton';
import './styles.css';

function SalesCard() {

    const max = new Date();
    const min = new Date(new Date().setDate(new Date().getDate() - 365));

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const [sales, setSales] = useState<Sale[]>([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/sales`)
            .then(response => {
                setSales(response.data.content)
            })
    }, []);


    return (
        <>
            <div className="card">
                <h2 className="titulo-vendas">Vendas</h2>

                <div>
                    <div className="box-formulario">
                        <DatePicker
                            selected={minDate}
                            onChange={(date: Date) => setMinDate(date)}
                            className="controle-form"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div className="box-formulario">
                        <DatePicker
                            selected={maxDate}
                            onChange={(date: Date) => setMaxDate(date)}
                            className="controle-form"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                </div>

                <div>
                    <table className="tabela-vendas">
                        <thead>
                            <tr>
                                <th className="mostrar-992">ID</th>
                                <th className="mostrar-576">Data</th>
                                <th>Vendedor</th>
                                <th className="mostrar-992">Visitas</th>
                                <th className="mostrar-992">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>

                        <tbody>

                            {sales.map(sale => {
                                return (
                                    <tr key={sale.id}>
                                        <td className="mostrar-992">{sale.id}</td>
                                        <td className="mostrar-576">{new Date(sale.date).toLocaleDateString()}</td>
                                        <td>{sale.sellerName}</td>
                                        <td className="mostrar-992">{sale.visited}</td>
                                        <td className="mostrar-992">{sale.deals}</td>
                                        <td>R$ {sale.amount.toFixed(2)}</td>
                                        <td>
                                            <div className="box-botao">
                                                <NotificationButton />
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })

                            }
                        </tbody>

                    </table>

                </div>

            </div>
        </>
    )
}

export default SalesCard;