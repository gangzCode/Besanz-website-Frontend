'use client';

import axios from "axios";
import Swal from 'sweetalert2'

const SERVER_PATH = process.env.NEXT_PUBLIC_SERVER_URL + '/bill';

async function getAxiosAuthHeader() {
    let tokenData = await axios.get(
        '/api/handler'
    );
    return {
        headers: {
            authorization: 'Bearer ' + tokenData.data.token
        }
    }
}

export async function getOldBillsUser(searchParam) {
    try {
        return await axios.post(
            SERVER_PATH + '/getOldBillsUser',
            searchParam,
            await getAxiosAuthHeader()
        );
    } catch (e) {
        console.error(e)
        Swal.fire({
            title: 'Error!',
            text: (e?.response?.data?.data) ? e?.response?.data?.data : "Error occurred while fetching bills. Please try again later.",
            icon: 'error',
            heightAuto: false,
            confirmButtonText: 'OK'
        })
        return {data : []};
    }
}

export async function getPayableBillsUser(searchParam) {
    try {
        return await axios.post(
            SERVER_PATH + '/getPayableBillsUser',
            searchParam,
            await getAxiosAuthHeader()
        );
    } catch (e) {
        console.error(e)
        Swal.fire({
            title: 'Error!',
            text: (e?.response?.data?.data) ? e?.response?.data?.data : "Error occurred while fetching bills. Please try again later.",
            icon: 'error',
            heightAuto: false,
            confirmButtonText: 'OK'
        })
        return {data : []};
    }
}

export async function getPDFData(billId) {
    try {
        return await axios.post(
            SERVER_PATH + '/getBillPDFData',
            {
                bill_id: billId
            },
            await getAxiosAuthHeader()
        );
    } catch (e) {
        console.error(e)
        Swal.fire({
            title: 'Error!',
            text: (e?.response?.data?.data) ? e?.response?.data?.data : "Error occurred while fetching PDF. Please try again later.",
            icon: 'error',
            heightAuto: false,
            confirmButtonText: 'OK'
        })
        return [];
    }
}

export function openInvoicePDF(base64Data) {
    if (window) {
        // Decode base64 string, remove the `data:application/pdf;base64,` part
        const base64 = base64Data.split(',')[1];
        // Convert the base64 string to a byte array
        const byteCharacters = atob(base64);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        // Create a Blob from the byte array
        const blob = new Blob([byteArray], {type: 'application/pdf'});
        // Create a URL for the Blob and open it in a new tab
        const blobUrl = URL.createObjectURL(blob);
        window.open(blobUrl);
    }
}

export function downloadInvoicePdf(base64Data, fileName) {
    if (document) {
        const base64 = base64Data.split(',')[1];
        const byteCharacters = atob(base64);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], {type: 'application/pdf'});
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(blobUrl);
    }
};
