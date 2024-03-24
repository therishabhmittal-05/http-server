#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
struct Process {
    int id;
    int arrivalTime;
    int burstTime;
    int remainingTime;
};
bool compareByArrivalTime(const Process& a, const Process& b) {
    return a.arrivalTime < b.arrivalTime;
}
int main() {
    int n; 
    cout << "Enter the number of processes: ";
    cin >> n;
    vector<Process> processes(n);
    for (int i = 0; i < n; ++i) {
        cout << "Enter arrival time and burst time for process P" << i + 1 << ": ";
        cin >> processes[i].arrivalTime >> processes[i].burstTime;
        processes[i].id = i + 1;
        processes[i].remainingTime = processes[i].burstTime;
    }
    sort(processes.begin(), processes.end(), compareByArrivalTime);
    int currentTime = 0;
    while (!processes.empty()) {
        int shortestIndex = -1;
        int shortestRemainingTime = INT_MAX;
        for (int i = 0; i < processes.size(); ++i) {
            if (processes[i].arrivalTime <= currentTime && processes[i].remainingTime < shortestRemainingTime) {
                shortestIndex = i;
                shortestRemainingTime = processes[i].remainingTime;
            }
        }
        if (shortestIndex != -1) {
            Process& currentProcess = processes[shortestIndex];
            cout << "Executing P" << currentProcess.id << " from time " << currentTime << " to ";
            currentTime += 1;
            currentProcess.remainingTime -= 1;

            if (currentProcess.remainingTime == 0) {
                cout << currentTime << " (completed)" << endl;
                processes.erase(processes.begin() + shortestIndex);
            } else {
                cout << currentTime << endl;
            }
        } else {
            currentTime += 1; 
        }
    }
    return 0;
}
