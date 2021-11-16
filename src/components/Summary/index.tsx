import incomeImage from '../../assets/images/entradas.svg'
import outcomeImage from '../../assets/images/saidas.svg';
import totalImage from '../../assets/images/total.svg';
import { Container } from "./styles";

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImage} alt="Entradas" />
                </header>
                <strong>
                    R$1000,00
                </strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImage} alt="Saídas" />
                </header>
                <strong>
                    -R$500,00
                </strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImage} alt="Total" />
                </header>
                <strong>
                    R$500,00
                </strong>
            </div>
        </Container>
    )
}