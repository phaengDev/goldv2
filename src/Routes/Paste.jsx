import React,{useState} from 'react'
import HomePage from '../screens/home/homePage';
import Login from '../screens/404/Login';
import UserPage from '../screens/setting/userPage';
import ZonePage from '../screens/setting/zonePage';
import PorductTile from '../screens/action/PorductTile-Page';
import PatternPage from '../screens/action/patternPage';
import ProductsPage from '../screens/action/productsPage'
import UnitePage from '../screens/setting/unitePage';
import FormPorduct from '../screens/action/formPorduct';
import ReportsaleDaily from '../screens/reports/report-sale-daily';
import StaffPage from '../screens/staff/staffPage';
import FormStaff from  '../screens/staff/form-rigister-staff'
import FormEditStaff from  '../screens/staff/form-edit-staff'
import FormSale from '../screens/action/form-sale'
import StockSales from '../screens/action/stock-sales';
import RormReceived from '../screens/action/form-received';
import ViewPorductZone from '../screens/action/view-porduct-zone';
import ViewPorductTile from '../screens/action/view-porduct-tile';
import ReportSaleList from '../screens/reports/report-sale-list'; 
import CancleSale from '../screens/action/cancle-sale';
import ReportCancleList from '../screens/reports/report-cancle-list';
import ReportStock from '../screens/reports/report-stock';
import OffBalanceSale from '../screens/reports/off-balance-sale';
import SystemPage from '../screens/setting/systemPage';
import SetPirceSale from '../screens/setting/setPirce-sale';
import HistorySetPrice from '../screens/setting/history-setPrice';
import ReportReceived from '../screens/reports/report-received';
import { Routes, Route, Navigate } from 'react-router-dom';
export default function AppContent() {
 
  return (
    <Routes>
        <Route path='/' element={<Navigate replace to={'login'} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/zone" element={<ZonePage />} />
            <Route path="/type" element={<PorductTile />} />
            <Route path="/pattern" element={<PatternPage />} />
            <Route path="/product" element={<ProductsPage />} />
            <Route path="/unite" element={<UnitePage />} />
            <Route path="/add-ps" element={<FormPorduct />} />
            <Route path="/r-sale" element={<ReportsaleDaily />} />
            <Route path='/r-list' element={<ReportSaleList />}/>
            <Route path="/staff" element={<StaffPage />} />
            <Route path="/form-staff" element={<FormStaff />} />
            <Route path="/edit-staff" element={<FormEditStaff />} />
            <Route path="/sale" element={<FormSale />} />
            <Route path="/stock" element={<StockSales />} />
            <Route path='/received' element={<RormReceived />}/>
            <Route path='/view-z' element={<ViewPorductZone />}/>
            <Route path='/view-p' element={<ViewPorductTile />}/>
            <Route path='/cancle' element={<CancleSale />}/>
            <Route path='/r-stock' element={<ReportStock />}/>
            <Route path='/cl-list' element={<ReportCancleList />}/>
            <Route path='/offSale' element={<OffBalanceSale />}/> 
            <Route path='/system' element={<SystemPage />}/> 
            <Route path='/price' element={<SetPirceSale />}/> 
            <Route path='/h-price' element={<HistorySetPrice />}/> 
            <Route path='/r-import' element={<ReportReceived />}/> 
            
        </Routes>
  )
}
