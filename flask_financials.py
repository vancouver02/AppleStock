from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/financials', methods=['GET'])
def get_financials():
    data = {
        "analyst_estimates": {
            "Citibank": 6.5,
            "Goldman Sachs": 7.9,
            "Morgan Stanley": 9.87
        },
        "candlestick_data": [
            { "x": "2024-06-01", "o": 150, "h": 160, "l": 148, "c": 155 },
            { "x": "2024-06-02", "o": 155, "h": 165, "l": 152, "c": 160 }
        ],
        "current_price": 194.35,
        "current_ratio": 7.1,
        "debt_to_equity_ratio": 2.1,
        "eps": 1.7,
        "market_ap": 2.5,
        "pb_ratio": 7.9,
        "pe_ratio": 1.2,
        "peg_ratio": 5.5,
        "previous_close": 194.32,
        "price_change": 0.16,
        "ps_ratio": 33.5,
        "shares_outstanding": 317,
        "ticker": "AAPL"
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
