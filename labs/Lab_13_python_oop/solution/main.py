from datetime import datetime
import json
import os
from writer import XlsAnalyticPaymentWriter

def load_data(file_path):
    full_path = os.path.join(
        ".",
        file_path
    )

    with open(full_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
    return data


if __name__ == '__main__':
    clients_data = load_data('clients.json')
    payments_data = load_data('payments.json')

    data = {'clients': clients_data['clients'], 'payments': payments_data['payments']}

    timestamp = datetime.now().strftime('%Y_%m_%d_%H_%M_%S')
    output_file = f'my_payments_analytics_{timestamp}.xlsx'

    xls_writer = XlsAnalyticPaymentWriter(data)
    xls_writer.write_excel_report(output_file)

    print(f"Success. Output file: {output_file}")