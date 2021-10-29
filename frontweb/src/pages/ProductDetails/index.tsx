import {ReactComponent as ArrowIcom } from 'assets/images/arrow.svg';
import ProductPrice from 'components/ProductPrice';

import './styles.css';

export const ProducDetails = () => {

      return (
          <div className= "product-details-container">
              <div className="base-card product-details-card">
                  <div className="goback-container">
                      <ArrowIcom/>
                      <h2>VOLTAR</h2>

                  </div>
                  <div className="row">
                      <div className="col-xl-6">
                          <div className="img-container">
                              <img src="https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg" alt="Nome do Produto" />

                          </div>
                          <div className="name-price-container">
                              <h1>Nome do Produto</h1>
                              <ProductPrice price={2456.00} />

                          </div>

                      </div>
                      <div className="col-xl-6">
                          <div className="description-container">
                              <h2>Descrição do Produto</h2>
                              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, harum?</p>

                          </div>

                      </div>

                  </div>

              </div>

          </div>

     );
}
export default ProducDetails;