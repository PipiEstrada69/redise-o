import { LockKeyhole, UserRound, X } from 'lucide-react'

function AccountModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="modal-layer" role="dialog" aria-modal="true" aria-labelledby="account-title">
      <button type="button" className="modal-backdrop" onClick={onClose} aria-label="Cerrar cuenta" />
      <section className="modal-card modal-card--narrow">
        <div className="drawer-header">
          <div>
            <p className="eyebrow">Cuenta visual</p>
            <h2 id="account-title">Acceso de cliente</h2>
          </div>
          <button type="button" className="icon-button" onClick={onClose} aria-label="Cerrar cuenta">
            <X size={20} />
          </button>
        </div>
        <div className="account-hero">
          <UserRound size={34} aria-hidden="true" />
          <p>Modal no funcional para mostrar la experiencia de login sin recoger datos reales.</p>
        </div>
        <label>
          Email
          <input type="email" placeholder="tu@email.com" />
        </label>
        <label>
          Contraseña
          <input type="password" placeholder="********" />
        </label>
        <button type="button" className="primary-button" disabled>
          <LockKeyhole size={18} aria-hidden="true" /> Login desactivado
        </button>
      </section>
    </div>
  )
}

export default AccountModal
