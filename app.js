
 document.addEventListener('DOMContentLoaded', function() {
            // Initialisierung der Tränke
            const potions = ['Boldness', 'Flight', 'Healing', 'Resilience', 'Swiftness'];
            
            // Lade gespeicherte Werte aus localStorage oder setze auf 0, wenn keine vorhanden sind
            potions.forEach(potion => {
                const savedQuantity = localStorage.getItem(`potion_${potion}`);
                if (savedQuantity === null) {
                    localStorage.setItem(`potion_${potion}`, '0');
                }
            });
            
            // Aktualisiere die Anzeige
            updateAllDisplays();
            
            // Event-Listener für alle Buttons
            document.querySelectorAll('.add-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const potionType = this.closest('.card').dataset.potion;
                    updatePotionQuantity(potionType, 1);
                });
            });
            
            document.querySelectorAll('.consume-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const potionType = this.closest('.card').dataset.potion;
                    updatePotionQuantity(potionType, -1);
                });
            });
            
            // Funktion zum Aktualisieren der Trank-Menge
            function updatePotionQuantity(potionType, change) {
                const key = `potion_${potionType}`;
                let quantity = parseInt(localStorage.getItem(key) || '0');
                
                // Stelle sicher, dass die Menge nicht unter 0 fällt
                quantity = Math.max(0, quantity + change);
                
                // Speichere den neuen Wert
                localStorage.setItem(key, quantity.toString());
                
                // Aktualisiere die Anzeige
                updateDisplay(potionType);
            }
            
            // Funktion zum Aktualisieren der Anzeige eines bestimmten Tranks
            function updateDisplay(potionType) {
                const card = document.querySelector(`.card[data-potion="${potionType}"]`);
                const display = card.querySelector('.quantity-display');
                const quantity = localStorage.getItem(`potion_${potionType}`);
                display.value = quantity;
            }
            
            // Funktion zum Aktualisieren aller Anzeigen
            function updateAllDisplays() {
                potions.forEach(potion => {
                    updateDisplay(potion);
                });
            }
        });