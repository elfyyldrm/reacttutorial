import React, { Component } from 'react';

import './App.css';
import SehirlerListesi from './SehirlerListesi';
import './kutucuk.css';
import './baslik.css';
import './il-ilce.css';


class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const a="Genel Seçim Sonuçları";
        const baslik="Türkiye Geneli";
        return (
            <div className="App">
                <h1>{a}</h1>
                <hr/>
                <h2>{baslik}</h2>
                <div className="flex-container">
                    <div >CUMHUR İTTİFAKI<hr/>oy oranı:%53.67</div>
                    <div>MİLLET İTTİFAKI<hr/>oy oranı:%33.95</div>
                    <div>DİĞER<hr/>oy oranı:%11.71 </div>

                </div>
                <hr/>
                <h2>İl/İlçe Oy Dağılımı</h2>
                <SehirlerListesi/>
                <p/>

            </div>

        );
    }
}

export default App;