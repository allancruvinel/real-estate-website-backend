import Apartment from '../models/Apartment';
import imageView from '../views/ImageView';

export default {
    render(apartment: Apartment) {
        return {
            id: apartment.id,
            titulo: apartment.titulo,
            descricao: apartment.descricao,
            nrApto : apartment.nrApto,
            nmPredio: apartment.nmPredio,
            nrTorre: apartment.nrTorre,
            preco: apartment.preco,
            cond: apartment.cond,
            iptu: apartment.iptu,
            bairro: apartment.bairro,
            dtVenc: apartment.dtVenc,
            aUtil: apartment.aUtil,
            vGaragem: apartment.vGaragem,
            banh: apartment.banh,
            suite: apartment.suite,
            dorm: apartment.dorm,
            churras: apartment.churras,
            piscina: apartment.piscina,
            playground: apartment.playground,
            poli: apartment.poli,
            sFestas: apartment.sFestas,
            sauna: apartment.sauna,
            sJogos: apartment.sJogos,
            ativo: apartment.ativo,
            images: imageView.renderMany(apartment.images)
        };
    },
    renderMany(apartments: Apartment[]){
        return apartments.map(apartment=> this.render(apartment));
    }

}