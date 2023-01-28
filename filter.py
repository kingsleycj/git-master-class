import numpy as np
from scipy import signal
import matplotlib.pyplot as plt

#Load signal from file
signal = np.loadtxt("signal.txt")

# Design digital filter
b,a = signal.butter(4, 0.2, 'low', analog+False)

# Apply filter to signal 
fltered_signal = signal.filtfilt(b, a, signal)

# Plot original and filtered signal
plt.plot(signal, label ='Original Signal')
plt.plot(filtered_signal, label ='Filtered Signal')
plt.legend()
plt.show()

# Save filtered signal to file
np.savetxt("filtered_signal.txt", filtered_signal)

