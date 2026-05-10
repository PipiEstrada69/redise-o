import AccountModal from './AccountModal'
import CartDrawer from './CartDrawer'
import Footer from './Footer'
import Header from './Header'
import SearchModal from './SearchModal'

function Layout({
  children,
  currentPath,
  navHighlightPath,
  navigate,
  cartItems,
  onQuantityChange,
  cartOpen,
  setCartOpen,
  onBeginCheckout,
  searchOpen,
  setSearchOpen,
  accountOpen,
  setAccountOpen,
  mobileOpen,
  setMobileOpen,
}) {
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <>
      <Header
        currentPath={currentPath}
        navHighlightPath={navHighlightPath}
        navigate={navigate}
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
        onSearchOpen={() => setSearchOpen(true)}
        onAccountOpen={() => setAccountOpen(true)}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
      <main>{children}</main>
      <Footer navigate={navigate} />
      <CartDrawer
        isOpen={cartOpen}
        cartItems={cartItems}
        onClose={() => setCartOpen(false)}
        onQuantityChange={onQuantityChange}
        onBeginCheckout={onBeginCheckout}
      />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} navigate={navigate} />
      <AccountModal isOpen={accountOpen} onClose={() => setAccountOpen(false)} />
    </>
  )
}

export default Layout
