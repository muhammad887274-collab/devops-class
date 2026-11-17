#!/bin/bash
echo "======================================"
echo "   SHABBIR SERVER HEALTH REPORT"
echo "======================================"
echo "Date & Time: $(date)"
echo "Active User: $(whoami)"
echo "--------------------------------------"
echo "Memory (RAM) Status:"
free -h
echo "--------------------------------------"
echo "Disk Space Status:"
df -h | grep /mnt/
echo "======================================"
