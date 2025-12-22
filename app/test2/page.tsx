import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>

      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[{
          label: 'Total Sales',
          value: '$24,320',
          change: '+12.4%',
        },
        {
          label: 'Orders',
          value: '1,284',
          change: '+3.1%',
        },
        {
          label: 'Active Users',
          value: '842',
          change: '+5.6%',
        },
        {
          label: 'Refunds',
          value: '23',
          change: '-1.2%',
        }].map((card) => (
          <div
            key={card.label}
            className="bg-white rounded-xl shadow-sm px-4 py-3 flex flex-col gap-1"
          >
            <span className="text-xs text-gray-500">{card.label}</span>
            <span className="text-lg font-semibold text-gray-900">{card.value}</span>
            <span className="text-xs text-emerald-600 font-medium">{card.change}</span>
          </div>
        ))}
      </div>

      {/* Charts + lists */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Fake bar chart */}
        <div className="bg-white rounded-xl shadow-sm p-4 lg:col-span-2">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-gray-800">Revenue (Last 7 days)</h2>
            <span className="text-xs text-gray-500">Hardcoded sample</span>
          </div>
          <div className="flex items-end gap-2 h-40">
            {[320, 210, 450, 380, 510, 470, 390].map((v, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full bg-indigo-500 rounded-t-md"
                  style={{ height: `${(v / 520) * 100}%` }}
                />
                <span className="text-[10px] text-gray-500">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Top products */}
        <div className="bg-white rounded-xl shadow-sm p-4">
          <h2 className="text-sm font-semibold text-gray-800 mb-3">Top Products</h2>
          <ul className="space-y-2 text-sm">
            {[
              { name: 'Wireless Headphones', sales: 187, revenue: '$4,120' },
              { name: 'Smart Watch', sales: 142, revenue: '$3,540' },
              { name: 'Gaming Mouse', sales: 98, revenue: '$1,980' },
              { name: 'Mechanical Keyboard', sales: 73, revenue: '$2,210' },
            ].map((item) => (
              <li
                key={item.name}
                className="flex items-center justify-between border border-gray-100 rounded-lg px-3 py-2"
              >
                <div>
                  <p className="text-gray-800 text-xs font-medium">{item.name}</p>
                  <p className="text-[11px] text-gray-500">{item.sales} sales</p>
                </div>
                <span className="text-xs font-semibold text-gray-900">{item.revenue}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Recent orders table */}
      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-gray-800">Recent Orders</h2>
          <span className="text-xs text-gray-500">Last 5 hardcoded rows</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="text-gray-500 border-b text-[11px]">
              <tr>
                <th className="py-2 pr-4">Order ID</th>
                <th className="py-2 pr-4">Customer</th>
                <th className="py-2 pr-4">Status</th>
                <th className="py-2 pr-4 text-right">Total</th>
              </tr>
            </thead>
            <tbody className="text-[11px]">
              {[
                { id: '#1042', customer: 'Alex Johnson', status: 'Completed', total: '$182.40' },
                { id: '#1041', customer: 'Maria Garcia', status: 'Pending', total: '$76.20' },
                { id: '#1040', customer: 'David Lee', status: 'Completed', total: '$242.10' },
                { id: '#1039', customer: 'Emma Wilson', status: 'Refunded', total: '$39.99' },
                { id: '#1038', customer: 'Liam Brown', status: 'Completed', total: '$128.70' },
              ].map((order) => (
                <tr key={order.id} className="border-b last:border-0">
                  <td className="py-2 pr-4 font-medium text-gray-800">{order.id}</td>
                  <td className="py-2 pr-4 text-gray-700">{order.customer}</td>
                  <td className="py-2 pr-4">
                    <span className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] bg-gray-100 text-gray-700">
                      {order.status}
                    </span>
                  </td>
                  <td className="py-2 pr-0 text-right font-semibold text-gray-900">{order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default page
